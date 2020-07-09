# GraphQL Server Example

This example shows how to implement a **GraphQL server with TypeScript** based on [Prisma Client](https://github.com/prisma/prisma2/blob/master/docs/prisma-client-js/api.md), [Apollo Server](https://github.com/apollographql/apollo-server) and [Nexus Schema](https://nxs.li/components/standalone/schema). It is based on a Yugabyte database using the YSQL (Postgres wire-compatible) API.

## Prerequisites 

### 1. Get started with Yugabyte and get a cluster up and running!

If you are unfamiliar with Yugabyte and creating a simple cluster, please proceed to this handy [Quick Start](https://docs.yugabyte.com/latest/quick-start/) page to learn more.

The alternative to creating a local cluster is to create a cluster using [Yugabyte Cloud](https://www.yugabyte.com/cloud/) - Yugabyte's fully managed service. You can register for the free cloud tier which includes 5GB of storage that will be replicated across 3 nodes. In order to create a cluster proceed through the following steps:

After registering for the service and logging in, create a Free Tier cluster ![here](https://github.com/vvkgopalan/prisma-examples/blob/master/images/yb_cloud1.png?raw=true)
Then select deployment options from the Free Tier available options ![here](https://github.com/vvkgopalan/prisma-examples/blob/master/images/yb_cloud2.png?raw=true)
And finally view your newly created cluster on this screen ![here](https://github.com/vvkgopalan/prisma-examples/blob/master/images/yb_cloud3.png?raw=true)

### 2. Load some sample data into your new Yugabyte database.

Once your cluster is up and running, we will now load some dummy data by doing the following. First, you will need to navigate to `~/code/yugabyte-db` or wherever you have cloned the `yugabyte-db` repository and connect to your Yugabyte database. If you are using a local cluster, connect to the `yugabyte` database by running `./bin/ysqlsh`. If you are using the Free Cloud Tier, navigate to your cluster and view the connection information by clicking `Connect`. Copy that command and run it locally.

Now once you have connected to the default `yugabyte` database in your cluster by running the above command. Run the following to create the `northwind` database:
```
CREATE DATABASE northwind;
\c northwind
```

Load your data via `\i ~/code/yugabyte-prisma2-examples/northwind/northwind_ddl.sql` and `\i ~/code/yugabyte-prisma2-examples/northwind/northwind_data.sql`. 

### 3. Add connection information to Prisma environment file. 

Navigate to `~/code/prisma-examples/typescript/graphql/prisma` and create the `.env` file. To connect your database, you need to set the URL field of the datasource block in your Prisma schema to your database connection URL. In this case, the url is set via an environment variable which is defined in `.env` of the form:
```
DATABASE_URL="postgresql://user:password@host:port/db?schema=name"
```
You will need to change it to the following (if running locally):
```
DATABASE_URL="postgresql://yugabyte@127.0.0.1:5433/northwind"
```
If you specified a host and port during cluster creation, you can replace `localhost:5433` with that by fetching it from running `~/code/yugabyte-db/bin/yb-ctl status`.

The parameters for this connection string when using the Free Cloud Tier can be found by navigating to the connection info as you did previously and replacing `user, password, host, and port` accordingly. Replace `db` with `northwind` and leave schema empty (default to the public schema). Add this line and save the file.

### 4. Install npm dependencies.

```
cd yugabyte-prisma2-examples/northwind-graphql
npm install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

### 5. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm run dev
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

## Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./schema.graphql`](./schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

### Retrieve all published posts and their authors

```graphql
query {
  feed {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

### Create a new user

```graphql
mutation {
  signupUser(
    data: {
      name: "Sarah"
      email: "sarah@prisma.io"
    }
  ) {
    id
  }
}
```

### Create a new draft

```graphql
mutation {
  createDraft(
    title: "Join the Prisma Slack"
    content: "https://slack.prisma.io"
    authorEmail: "alice@prisma.io"
  ) {
    id
    published
  }
}
```

