
//! The overview data should sit outside of components, maybe denoted as such if needed.

export default {
  accounts: [
    {
      name: "Test Account",
      balance: "-788",
      income: "1200",
      outcome: "-450",
      transactions: [
        {
          description: "This is a test transaction",
          date: "15-10-18",
          amount: "1200"
        },
        {
          description: "This is a test transaction, but a bad one",
          date: "29-09-18",
          amount: "-450"
        },
        {
          description: "Rent",
          date: "15-10-18",
          amount: "-350"
        }
      ]
    }
  ]
};