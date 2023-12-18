export type Team = {
  id: number;
  name: string;
  description: string;
};

export type User = {
  _id: string;
  isActive: boolean;
  picture: string;
  team: number;
  role: string;
  name: string;
  gender: string;
  email: string;
  phone: string;
  location: string;
};
