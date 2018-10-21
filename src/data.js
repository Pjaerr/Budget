
//! The overview data should sit outside of components, maybe denoted as such if needed.

export default {
  accounts: [
    {
      name: "Fake Account",
      transactions: [
        {
          description: "This is a test transaction",
          date: "15-10-18",
          amount: 1200
        },
        {
          description: "This is a test transaction, but a bad one",
          date: "29-09-18",
          amount: -450
        },
        {
          description: "Rent",
          date: "15-10-18",
          amount: -350
        }
      ]
    },
    {
      name: "A Different Account",
      transactions: [
        {
          description: "Gaining money transaction",
          date: "15-10-18",
          amount: 50
        },
        {
          description: "Losing money transaction",
          date: "29-09-18",
          amount: -25
        },
        {
          description: "Test transaction",
          date: "15-10-18",
          amount: 100
        }
      ]
    }
  ]
};