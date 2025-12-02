"use client";

import {
    AvatarGroup,
    Column,
    Flex,
    Heading,
    SmartLink,
    Text,
    Tag,
} from "@once-ui-system/core";

import type { GitHubRepo } from "./github";

interface RepositoryCardProps {
    repo: GitHubRepo;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
    return (
        <Column fillWidth gap="m" paddingY="m" paddingX="s">
            <Flex
                mobileDirection="column"
                fillWidth
                gap="l"
            >
                <Flex flex={2} direction="column" gap="8">
                    <Heading as="h3" wrap="balance">
                        {repo.name}
                    </Heading>
                    {repo.language && (
                        <Tag variant="neutral" size="s">
                            {repo.language}
                        </Tag>
                    )}
                </Flex>

                <Column flex={7} gap="16">
                    <AvatarGroup
                        avatars={[{ src: repo.owner.avatar_url }]}
                        size="m"
                        reverse
                    />

                    {repo.description && (
                        <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                            {repo.description}
                        </Text>
                    )}

                    <Flex gap="8" wrap>
                        <Text variant="body-default-xs" onBackground="neutral-weak">
                            ⭐ {repo.stargazers_count}
                        </Text>
                        <Text variant="body-default-xs" onBackground="neutral-weak">
                            🍴 {repo.forks_count}
                        </Text>
                    </Flex>

                    <Flex gap="24" wrap>
                        <SmartLink
                            suffixIcon="arrowUpRightFromSquare"
                            style={{ margin: "0", width: "fit-content" }}
                            href={repo.html_url}
                        >
                            <Text variant="body-default-s">GitHub</Text>
                        </SmartLink>

                        {repo.homepage && (
                            <SmartLink
                                suffixIcon="arrowUpRightFromSquare"
                                style={{ margin: "0", width: "fit-content" }}
                                href={repo.homepage}
                            >
                                <Text variant="body-default-s">Site</Text>
                            </SmartLink>
                        )}
                    </Flex>
                </Column>
            </Flex>
        </Column>
    );
};
