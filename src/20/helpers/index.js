const getHorizontal = (full, index) => full[index].join('');
const getColumn = (full, itemCalc) =>
  full
    .reduce((acc, item) => {
      acc.push(itemCalc(item));
      return acc;
    }, [])
    .join('');

const getEdges = (full) => {
  let edges = [];
  edges.push(getHorizontal(full, 0));
  edges.push(getHorizontal(full, full.length - 1));

  edges.push(
    getColumn(full, (item) => {
      return item[0];
    })
  );

  edges.push(
    getColumn(full, (item) => {
      return item.slice(-1)[0];
    })
  );

  return edges;
};

const processItem = (item) => {
  const processedItem = item.split('');
  return processedItem;
};

const getBatches = (inputData) => {
  const batches = inputData.reduce(
    (acc, item) => {
      if (item === '') {
        acc.push({});
        return acc;
      }

      if (!acc[acc.length - 1].tile) {
        acc[acc.length - 1].tile = item.replace('Tile ', '').replace(':', '');
        acc[acc.length - 1].tileDetails = [];
      } else {
        acc[acc.length - 1].tileDetails.push(processItem(item));
      }
      return acc;
    },
    [{}]
  );

  const batchesMap = new Map();
  const batchesWithEdges = [];
  batches.forEach((batch) => {
    batchesWithEdges.push({
      tile: batch.tile,
      tileDetails: batch.tileDetails,
      edges: getEdges(batch.tileDetails),
    });
    batchesMap.set(batch.tile, {
      full: batch.tileDetails,
      edges: getEdges(batch.tileDetails),
    });
  });

  return batchesWithEdges;
  return batchesMap;
};

export default getBatches;
