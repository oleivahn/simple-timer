export const DataSource = {
  get: () => {
    return "Hello World";
    // return Promise.resolve({
    //   data: [
    //     { id: 1, name: "John" },
    //     { id: 2, name: "Jane" },
    //     { id: 3, name: "Bob" },
    //   ],
    // });
  },
  get2: () => {
    return "Hello World 2";

    // return Promise.resolve({
    //   data: [
    //     { id: 1, name: "John" },
    //     { id: 2, name: "Jane" },
    //     { id: 3, name: "Bob" },
    //   ],
    // });
  },
};
