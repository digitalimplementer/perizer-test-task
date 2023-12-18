export type RowUserData = {
  key: string;
  name: string;
  email: string;
  gender: string;
  phone: string;
  teamName: string;
  userRole: string;
  location: string;
  picture: string;
};

export type Props = {
  dataSource: Array<RowUserData>;
};
