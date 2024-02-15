import React from "react";
import Link from "next/link";
import { Image, Table } from "semantic-ui-react";
import { UserType } from "@service/graphql-ts/graphql";

const mapUsersToTable = (({users}:{users:UserType[]}) => {
  return (
    <div>
      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>UserName</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Rol-1</Table.HeaderCell>
            <Table.HeaderCell>Rol-2</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.userName}</Table.Cell>
              <Table.Cell>{user.password}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.firstName}</Table.Cell>
              <Table.Cell>{user.lastName}</Table.Cell>
              <Table.Cell>{user.roles ? user.roles[0].name : null}</Table.Cell>
              <Table.Cell>{user.roles ? user.roles[1].name : null}</Table.Cell>
              <Table.Cell>
                <Link as="a" href={`products/api/${user.id}`} >
                  <Image size="mini" circular src={`logo`} />
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
});
export default mapUsersToTable;