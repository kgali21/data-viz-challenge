
const salesData = [
    {
        "Date": "2021-10-01",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "1",
        "Item Cost": "$80",
        "Revenue": "$80"
    },
    {
        "Date": "2021-10-01",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$10",
        "Revenue": "$30"
    },
    {
        "Date": "2021-10-01",
        "Salesperson": "Joe",
        "Product": "Sandals",
        "Sales": "5",
        "Item Cost": "$54",
        "Revenue": "$270"
    },
    {
        "Date": "2021-10-02",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "7",
        "Item Cost": "$100",
        "Revenue": "$700"
    },
    {
        "Date": "2021-10-02",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$11",
        "Revenue": "$33"
    },
    {
        "Date": "2021-10-03",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "2",
        "Item Cost": "$54",
        "Revenue": "$108"
    },
    {
        "Date": "2021-10-03",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "4",
        "Item Cost": "$13",
        "Revenue": "$52"
    },
    {
        "Date": "2021-10-04",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "10",
        "Item Cost": "$10",
        "Revenue": "$100"
    },
    {
        "Date": "2021-10-04",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "2",
        "Item Cost": "$8",
        "Revenue": "$16"
    },
    {
        "Date": "2021-10-05",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "2",
        "Item Cost": "$4",
        "Revenue": "$8"
    },
    {
        "Date": "2021-10-05",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$10",
        "Revenue": "$30"
    },
    {
        "Date": "2021-10-06",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "2",
        "Item Cost": "$54",
        "Revenue": "$108"
    },
    {
        "Date": "2021-10-06",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "1",
        "Item Cost": "$100",
        "Revenue": "$100"
    },
    {
        "Date": "2021-10-06",
        "Salesperson": "Amy",
        "Product": "Sandals",
        "Sales": "2",
        "Item Cost": "$36",
        "Revenue": "$72"
    },
    {
        "Date": "2021-10-07",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$20",
        "Revenue": "$60"
    },
    {
        "Date": "2021-10-07",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "9",
        "Item Cost": "$15",
        "Revenue": "$135"
    },
    {
        "Date": "2021-10-08",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "10",
        "Item Cost": "$80",
        "Revenue": "$800"
    },
    {
        "Date": "2021-10-08",
        "Salesperson": "Amy",
        "Product": "Sandals",
        "Sales": "$49",
        "Item Cost": "$54",
        "Revenue": "$2,646"
    },
    {
        "Date": "2021-10-09",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "9",
        "Item Cost": "$80",
        "Revenue": "$720"
    },
    {
        "Date": "2021-10-09",
        "Salesperson": "Amy",
        "Product": "Sandas",
        "Sales": "10",
        "Item Cost": "$10",
        "Revenue": "$100"
    },
    {
        "Date": "2021-10-09",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "14",
        "Item Cost": "$9",
        "Revenue": "$126"
    },
    {
        "Date": "2021-10-10",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "7",
        "Item Cost": "$70",
        "Revenue": "$490"
    },
    {
        "Date": "2021-10-10",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "20",
        "Item Cost": "$7",
        "Revenue": "$140"
    },
    {
        "Date": "2021-10-11",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "15",
        "Item Cost": "$11",
        "Revenue": "$165"
    },
    {
        "Date": "2021-10-11",
        "Salesperson": "Amy",
        "Product": "Sandals",
        "Sales": "10",
        "Item Cost": "$45",
        "Revenue": "$450"
    },
    {
        "Date": "2021-10-12",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "3",
        "Item Cost": "$90",
        "Revenue": "$270"
    },
    {
        "Date": "2021-10-12",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "20",
        "Item Cost": "$15",
        "Revenue": "$300"
    },
    {
        "Date": "2021-10-13",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "12",
        "Item Cost": "$13",
        "Revenue": "$156"
    },
    {
        "Date": "2021-10-13",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "4",
        "Item Cost": "$95",
        "Revenue": "$380"
    },
    {
        "Date": "2021-10-14",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$9",
        "Revenue": "$27"
    },
    {
        "Date": "2021-10-14",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "7",
        "Item Cost": "$67",
        "Revenue": "$469"
    },
    {
        "Date": "2021-10-15",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "4",
        "Item Cost": "$8",
        "Revenue": "$32"
    },
    {
        "Date": "2021-10-15",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "9",
        "Item Cost": "$12",
        "Revenue": "$108"
    },
    {
        "Date": "2021-10-15",
        "Salesperson": "Joe",
        "Product": "Sandals",
        "Sales": "10",
        "Item Cost": "$45",
        "Revenue": "$450"
    },
    {
        "Date": "2021-10-16",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "14",
        "Item Cost": "$85",
        "Revenue": "$1,190"
    },
    {
        "Date": "2021-10-16",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "7",
        "Item Cost": "$13",
        "Revenue": "$91"
    },
    {
        "Date": "2021-10-17",
        "Salesperson": "Joe",
        "Product": "Sandals",
        "Sales": "2",
        "Item Cost": "$65",
        "Revenue": "$130"
    },
    {
        "Date": "2021-10-17",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "2",
        "Item Cost": "$65",
        "Revenue": "$130"
    },
    {
        "Date": "2021-10-18",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$9",
        "Revenue": "$27"
    },
    {
        "Date": "2021-10-18",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "17",
        "Item Cost": "$80",
        "Revenue": "$1,360"
    },
    {
        "Date": "2021-10-19",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "2",
        "Item Cost": "$11",
        "Revenue": "$22"
    },
    {
        "Date": "2021-10-19",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "7",
        "Item Cost": "$10",
        "Revenue": "$70"
    },
    {
        "Date": "2021-10-20",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "10",
        "Item Cost": "$110",
        "Revenue": "$1,100"
    },
    {
        "Date": "2021-10-20",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "2",
        "Item Cost": "$8",
        "Revenue": "$16"
    },
    {
        "Date": "2021-10-20",
        "Salesperson": "Amy",
        "Product": "Sandals",
        "Sales": "2",
        "Item Cost": "$65",
        "Revenue": "$130"
    },
    {
        "Date": "2021-10-21",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "20",
        "Item Cost": "$95",
        "Revenue": "$1,900"
    },
    {
        "Date": "2021-10-21",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "15",
        "Item Cost": "$9",
        "Revenue": "$135"
    },
    {
        "Date": "2021-10-22",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$10",
        "Revenue": "$30"
    },
    {
        "Date": "2021-10-22",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "7",
        "Item Cost": "$75",
        "Revenue": "$525"
    },
    {
        "Date": "2021-10-23",
        "Salesperson": "Joe",
        "Product": "Sandals",
        "Sales": "4",
        "Item Cost": "$60",
        "Revenue": "$240"
    },
    {
        "Date": "2021-10-23",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "9",
        "Item Cost": "$9",
        "Revenue": "$81"
    },
    {
        "Date": "2021-10-24",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "10",
        "Item Cost": "$8",
        "Revenue": "$80"
    },
    {
        "Date": "2021-10-24",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "14",
        "Item Cost": "$79",
        "Revenue": "$1,106"
    },
    {
        "Date": "2021-10-25",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "7",
        "Item Cost": "$86",
        "Revenue": "$602"
    },
    {
        "Date": "2021-10-25",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "7",
        "Item Cost": "$10",
        "Revenue": "$70"
    },
    {
        "Date": "2021-10-26",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "4",
        "Item Cost": "$54",
        "Revenue": "$216"
    },
    {
        "Date": "2021-10-26",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "7",
        "Item Cost": "$9",
        "Revenue": "$63"
    },
    {
        "Date": "2021-10-27",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$8",
        "Revenue": "$24"
    },
    {
        "Date": "2021-10-27",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "2",
        "Item Cost": "$89",
        "Revenue": "$178"
    },
    {
        "Date": "2021-10-28",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "4",
        "Item Cost": "$74",
        "Revenue": "$296"
    },
    {
        "Date": "2021-10-28",
        "Salesperson": "Joe",
        "Product": "Sandals",
        "Sales": "10",
        "Item Cost": "$49",
        "Revenue": "$490"
    },
    {
        "Date": "2021-10-28",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "15",
        "Item Cost": "$7",
        "Revenue": "$105"
    },
    {
        "Date": "2021-10-29",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "3",
        "Item Cost": "$11",
        "Revenue": "$33"
    },
    {
        "Date": "2021-10-29",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "7",
        "Item Cost": "$69",
        "Revenue": "$483"
    },
    {
        "Date": "2021-10-30",
        "Salesperson": "Joe",
        "Product": "Socks",
        "Sales": "4",
        "Item Cost": "$12",
        "Revenue": "$48"
    },
    {
        "Date": "2021-10-30",
        "Salesperson": "Amy",
        "Product": "Socks",
        "Sales": "4",
        "Item Cost": "$14",
        "Revenue": "$56"
    },
    {
        "Date": "2021-10-31",
        "Salesperson": "Joe",
        "Product": "Shoes",
        "Sales": "3",
        "Item Cost": "$88",
        "Revenue": "$264"
    },
    {
        "Date": "2021-10-31",
        "Salesperson": "Amy",
        "Product": "Shoes",
        "Sales": "8",
        "Item Cost": "$66",
        "Revenue": "$528"
    }
]

export default salesData;