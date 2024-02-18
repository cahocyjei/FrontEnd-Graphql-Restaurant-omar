import React from "react";
import Link from "next/link";
import { Image, Table } from "semantic-ui-react";
import { UserType } from "@service/graphql-ts/graphql";

const mapUsersToTable = (users:UserType[]) =>
  users.map(({ id, userName, password, email, firstName, lastName, roles }) => (
    <Table.Row key={id}>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{userName}</Table.Cell>
      <Table.Cell>{password}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{firstName}</Table.Cell>
      <Table.Cell>{lastName}</Table.Cell>
      <Table.Cell>{roles ? roles[0].name:null}</Table.Cell>
      <Table.Cell>
        <Link as="a" href={`products/api/${id}`} >
          <Image size="mini" circular src="/images/fuerte.jpg" />
        </Link>
      </Table.Cell>
    </Table.Row>
  )) 
const ListUsers = ({listUsers}:{listUsers:UserType[]}) => (
  <div>
    <h1 style={{ textAlign: 'center', color: 'darkolivegreen' }}>LISTA DE USUARIOS</h1>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>UserName</Table.HeaderCell>
          <Table.HeaderCell>Password</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>FirstName</Table.HeaderCell>
          <Table.HeaderCell>LastName</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
          <Table.HeaderCell>Link</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body >
        {mapUsersToTable(listUsers)}
      </Table.Body>
    </Table>
  </div>
)
export default ListUsers;
