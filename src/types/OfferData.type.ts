import { CardData } from './CardData.type';

export type HostType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  location: Location;
  name: string;
}

export type OfferDataType = CardData & {
  city: City;
  host: HostType;
  location: Location;
  bedrooms: number;
  description: string;
  goods: string[];
  images: string[];
  maxAdults: number;
};

