enum eventLevels {
  low = 1,
  medium,
  high
}

interface IEventConfig {
  enabled: boolean;
  level: eventLevels;
}

export interface IEvents {
  id: string;
  event1: IEventConfig;
  event2: IEventConfig;
  event3?: IEventConfig;
}

const events: IEvents[] = [
  {
    id: "316dc366-4a24-463f-b87c-2e8f2c11a903",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "3b0a3978-9ddd-43ec-ad44-40faf3e2d8be",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "23d3fe75-e824-4627-bf4a-c04949cf094a",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "af4e1915-67a1-44c2-a49e-cae68a0b23e4",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "0690ba6e-f998-4791-be22-3d38cfdf7d95",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "64e255d0-2c80-43fb-8003-56bee7bd756b",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "12f59d22-9086-42f3-90aa-902f45ef1d96",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "2f20e2e6-f308-4d62-830d-e7aa5a9a104e",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "82b150cc-d865-4b7f-8bb2-c2c59a43387f",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  },
  {
    id: "c643fc9a-b3c7-4367-97d8-c663971efc1f",
    event1: {
      level: eventLevels.medium,
      enabled: true
    },
    event2: {
      level: eventLevels.low,
      enabled: false
    }
  }
];

export default events;