export interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export interface ApiResponse {
  items: Repository[];
}