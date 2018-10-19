const faker = require("faker");

const radius = 20;
export const bubbles = [
  {
    name: "San Jose",
    region: "us-west",
    radius,
    country: "USA",
    latitude: 37.2966853,
    longitude: -122.0975973,
    fillKey: "error"
  },
  {
    name: "New York",
    region: "us-east",
    radius,
    country: "USA",
    latitude: 38.9541077,
    longitude: -77.496101,
    fillKey: "bubbleFill"
  },
  {
    name: "London",
    region: "us-east",
    radius,
    country: "UK",
    latitude: 51.501364,
    longitude: -0.1440787,
    fillKey: "bubbleFill"
  },
  {
    name: "Buenos Aires",
    region: "us-east",
    radius,
    latitude: -34.6157142,
    longitude: -58.5033602,
    fillKey: "error"
  },
  {
    name: "Sydney",
    region: "us-east",
    radius,
    latitude: -33.8567844,
    longitude: 151.213108,
    fillKey: "bubbleFill"
  },
  {
    name: "Hong Kong",
    region: "us-west",
    radius,
    latitude: 22.3574372,
    longitude: 113.8408289,
    fillKey: "bubbleFill"
  },
  {
    name: "Some DS",
    region: "us-west",
    radius: 10,
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    fillKey: "bubbleFill"
  }
];

export const mockConfig = Array(10).fill({ name: "key-1", value: "value-1" });

export const mockNodes = [
  { name: "node-1" },
  { name: "node-2" },
  { name: "node-3" }
];

export const createMockNodes = (name, count = 5) => {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push({
      id: faker.random.uuid(),
      key: faker.random.uuid(),
      name: `${name}-node-${i}`,
      config: mockConfig.map(c => {
        c.name = `node-${Date.now()}-config`;
        c.value = faker.random.number();
        return c;
      })
    });
  }
  return out;
};

export const mockClusters = [
  { name: "cluster-1", children: createMockNodes("c1") },
  { name: "cluster-2", children: createMockNodes("c1") },
  { name: "cluster-3", children: createMockNodes("p1") }
];

export const mockPods = [
  {
    name: "p1",
    children: [{ name: "p1-cluster-1", children: createMockNodes("c1") }]
  },
  {
    name: "p2",
    children: [{ name: "p2-cluster-2", children: createMockNodes("c2") }]
  },
  {
    name: "p3",
    children: [{ name: "p3-cluster-3", children: mockNodes }]
  }
];

console.log("mockPods", mockPods);

export const services = [
  { name: "Postgres" },
  { name: "Redis" },
  { name: "MongoDB" },
  { name: "RabbitMQ" }
];

const details = [
  { label: "Field 1", content: "Value 1" },
  { label: "Field 2", content: "Value 2" },
  { label: "Field 3", content: "Value 3" },
  {
    label: "Field 4",
    content: "Description (2-line truncation)",
    truncate: true
  }
];

const createDataCenter = (name, data) => {
  name = name.replace(/\s/g, "");
  return Object.assign(
    {},
    data,
    {
      id: name,
      name: name,
      config: mockConfig,
      services: services,
      pods: mockPods,
      details: details,
      url: faker.internet.url(),
      ip: faker.internet.ip()
    },
    {
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
      region: faker.address.stateAbbr(),
      radius: faker.random.number(25),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
      fillKey: faker.random.number(2) % 20 === 0 ? "bubbleFill" : "error"
    }
  );
};

export const dataCenters = [];

const count = 15;
for (let i = 0; i < count; i++) {
  dataCenters.push(
    createDataCenter(
      `dc-${faker.address
        .stateAbbr()
        .toLowerCase()}-${faker.address.city().toLowerCase()}`
    )
  );
}

export const dataCenter = createDataCenter("dc-nyc-east-1");
