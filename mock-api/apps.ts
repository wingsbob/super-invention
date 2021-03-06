export enum supportedDevices {
  mobile = 1,
  desktop = 2,
  mobileAndDesktop = 3
}

export interface IApp {
  id: string;
  supportedDevices: supportedDevices;
  enabled: boolean;
}

const apps: IApp[] = [
  {
    id: "f614bef0-c229-4b25-8dd6-d5eb142fbb16",
    enabled: true,
    supportedDevices: supportedDevices.mobileAndDesktop
  },
  {
    id: "316dc366-4a24-463f-b87c-2e8f2c11a903",
    enabled: false,
    supportedDevices: supportedDevices.mobile
  },
  {
    id: "3b0a3978-9ddd-43ec-ad44-40faf3e2d8be",
    enabled: false,
    supportedDevices: supportedDevices.desktop
  },
  {
    id: "23d3fe75-e824-4627-bf4a-c04949cf094a",
    enabled: true,
    supportedDevices: supportedDevices.mobile
  },
  {
    id: "af4e1915-67a1-44c2-a49e-cae68a0b23e4",
    enabled: false,
    supportedDevices: supportedDevices.mobile
  },
  {
    id: "0690ba6e-f998-4791-be22-3d38cfdf7d95",
    enabled: false,
    supportedDevices: supportedDevices.mobileAndDesktop
  },
  {
    id: "64e255d0-2c80-43fb-8003-56bee7bd756b",
    enabled: true,
    supportedDevices: supportedDevices.desktop
  },
  {
    id: "12f59d22-9086-42f3-90aa-902f45ef1d96",
    enabled: false,
    supportedDevices: supportedDevices.mobileAndDesktop
  },
  {
    id: "2f20e2e6-f308-4d62-830d-e7aa5a9a104e",
    enabled: true,
    supportedDevices: supportedDevices.mobile
  },
  {
    id: "82b150cc-d865-4b7f-8bb2-c2c59a43387f",
    enabled: true,
    supportedDevices: supportedDevices.desktop
  },
  {
    id: "c643fc9a-b3c7-4367-97d8-c663971efc1f",
    enabled: false,
    supportedDevices: supportedDevices.mobile
  }
];

export default apps;