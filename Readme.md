## Installation

```
npm i
docker-compose up -d
prisma deploy
prisma seed
```

## Query

```
query {
  items{
    secondItems(where: {mySuperSearch:"aa"}){id secondField}
  }
}
```

Result:
```
"message": "Variable '$where' expected value of type 'SecondItemWhereInput' but got: {\"mySuperSearch\":\"aa\"}. Reason: 'mySuperSearch' Field 'mySuperSearch' is not defined in the input type 'SecondItemWhereInput'. (line 1, column 8):\nquery ($where: SecondItemWhereInput, $where_1: ItemWhereUniqueInput!) {\n       ^",
```

## See Middleware 

`triggers/index.ts`