export class Event {
    id?: string;
    attendeeEmails?: string[];
    title?: string;
    evaluation?: number;
    ticketUrl?: string;
    ticketDomain?: string;
    spotifyUrl?: string;
    googleEventUrl?: string;
    instagramUrl?: string;
    youtubeUrl?: string;
    chat?: string;
    conferenceUrl?: string;
    description?: string;
    start?: Date;
    end?: Date;
    deadline?: Date;
    location?: string;
    public?: boolean = true;
    attachments?: string[];
    expanded?: boolean;
    discount?: number;
}
