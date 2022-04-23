const objectsDifference = (list1, list2) =>
  list1.filter((obj) => {
    return !list2.some((obj2) => {
      return (
        Object.keys(obj).length === Object.keys(obj2).length &&
        Object.keys(obj).every((p) => obj[p] === obj2[p])
      );
    });
  });
export default objectsDifference;
