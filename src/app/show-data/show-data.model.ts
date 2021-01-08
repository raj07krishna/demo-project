export interface PeriodicElement {
    id: string;
    email: number;
    first_name: number;
    last_name: string;
    avatar: string;
  }

  export interface incomingData{
    page: number,
    per_page: number,
    total_pages: number,
    data: PeriodicElement
  }