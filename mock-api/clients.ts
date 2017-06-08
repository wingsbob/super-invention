export interface IClient {
  id: string;
  apps: string[];
  name: string;
}

const client1: IClient = {
  id: '2e9466b1-6fae-4639-80c8-101181688d06',
  name: 'my first client',
  apps: ['f614bef0-c229-4b25-8dd6-d5eb142fbb16']
};
const client2: IClient = {
  id: '30941c2f-735d-4668-8846-7cca09951721',
  name: 'my second client',
  apps: ['316dc366-4a24-463f-b87c-2e8f2c11a903', '3b0a3978-9ddd-43ec-ad44-40faf3e2d8be', '23d3fe75-e824-4627-bf4a-c04949cf094a']
};
const client3: IClient = {
  id: '69922d9e-edd0-44ce-83d0-56d8a6da32c2',
  name: 'my first client',
  apps: [
    'af4e1915-67a1-44c2-a49e-cae68a0b23e4',
    '0690ba6e-f998-4791-be22-3d38cfdf7d95',
    '64e255d0-2c80-43fb-8003-56bee7bd756b',
    '12f59d22-9086-42f3-90aa-902f45ef1d96',
    '2f20e2e6-f308-4d62-830d-e7aa5a9a104e',
    '82b150cc-d865-4b7f-8bb2-c2c59a43387f'
  ]
};
const client4: IClient = {
  id: 'a62e3587-e433-4308-8224-ef8a39d5287e',
  name: 'my first client',
  apps: ['c643fc9a-b3c7-4367-97d8-c663971efc1f']
};

export default [client1, client2, client3, client4];