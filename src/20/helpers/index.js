const getHorizontal = (full, index) => full[index].join('');
const getColumn = (full, index) =>
  full
    .reduce((acc, item) => {
      acc.push(item[index]);
      return acc;
    }, [])
    .join('');

const getEdges = (full) => {
  let edges = [];
  edges.push(getHorizontal(full, 0));
  edges.push(getHorizontal(full, full.length - 1));

  const column1 = full
    .reduce((acc, item) => {
      acc.push(item[0]);
      return acc;
    }, [])
    .join('');
  edges.push(column1);

  const column2 = full
    .reduce((acc, item) => {
      acc.push(item.slice(-1)[0]);
      return acc;
    }, [])
    .join('');
  edges.push(column2);

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

      const processedItem = processItem(item);
      if (!acc[acc.length - 1].tile) {
        acc[acc.length - 1].tile = item.replace('Tile ', '').replace(':', '');
        acc[acc.length - 1].tileDetails = [];
      } else {
        acc[acc.length - 1].tileDetails.push(processedItem);
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
