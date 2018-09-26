
export default {
  accounts: [
    {
      name: "Test Account",
      income: "1200",
      outcome: "450",
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
        }
      ]
    }
  ],
};