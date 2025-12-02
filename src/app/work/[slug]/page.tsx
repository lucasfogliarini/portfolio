import { notFound } from "next/navigation";
import { getGitHubRepos, getRepoReadme } from "@/utils/github";
import { Meta, Schema, AvatarGroup, Button, Column, Flex, Heading, Media, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const repos = await getGitHubRepos();
  return repos.filter(repo => repo.topics.includes("project-portfolio")).map((repo) => ({
    slug: repo.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const repos = await getGitHubRepos();
  let repo = repos.find((r) => r.name === slugPath);

  if (!repo) return {};

  return Meta.generate({
    title: repo.name,
    description: repo.description || "",
    baseURL: baseURL,
    image: `/api/og/generate?title=${repo.name}`,
    path: `${work.path}/${repo.name}`,
  });
}

export default async function Project({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const repos = await getGitHubRepos();
  let repo = repos.find((r) => r.name === slugPath);
  const readmeContent = await getRepoReadme("lucasfogliarini", slugPath);

  if (!repo) {
    notFound();
  }

  const avatars = [{ src: repo.owner.avatar_url }];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${repo.name}`}
        title={repo.name}
        description={repo.description || ""}
        datePublished={repo.created_at}
        dateModified={repo.updated_at}
        image={`/api/og/generate?title=${encodeURIComponent(repo.name)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button data-border="rounded" href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Projetos
        </Button>
        <Heading variant="display-strong-s">{repo.name}</Heading>
      </Column>

      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          <AvatarGroup reverse avatars={avatars} size="m" />
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(repo.pushed_at)}
          </Text>
        </Flex>
        {readmeContent ? (
          <CustomMDX source={readmeContent} />
        ) : (
          <Text>README not found.</Text>
        )}
      </Column>
      <ScrollToHash />
    </Column>
  );
}
