

const location = new URL(window.location);
const data_base = `${location.protocol}//${location.host}/_file`;

const remote_sources = [
  "https://datadavev.github.io/parqit/geome.parquet",
  "https://datadavev.github.io/parqit/smithsonian.parquet",
  "https://datadavev.github.io/parqit/opencontext.parquet",
  "https://jelly.beehivebeach.com/data/sesar.parquet"
];

const local_sources = [
  data_base + "/data/geome.parquet",
  data_base + "/data/smithsonian.parquet",
  data_base + "/data/opencontext.parquet",
  data_base + "/data/sesar.parquet"
]
//const sources = local_sources;
const sources = remote_sources;
const ssources = `['${sources.join("','")}']`;
const source_list = sources.reduce((res, v) => {res.push(`'${v}'`); return res}, []);

export {sources, ssources, source_list};
