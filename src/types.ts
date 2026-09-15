export interface Facility {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  area: string;
  ceiling: string;
  theatreCapacity: number;
  banquetCapacity: number;
  classroomCapacity: number;
  cocktailCapacity: number;
  features: string[];
  imageUrl: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  imageGradient: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  quote: string;
  eventType: string;
  year: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'ballroom' | 'conclaves' | 'weddings' | 'architecture';
  description: string;
  dimensions: string;
  imageUrl: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  preferredRoom: string;
  notes: string;
}
