import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default () => {
  const [formState, setFormState] = React.useState({
    title: '',
    author: '',
    body: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const fields = Object.keys(formState);

  return (
    <div>
      {fields.map(field => (
        <input
          placeholder={field}
          name={field}
          onChange={handleChange}
          value={formState[field]}
        />
      ))}
      <Mutation
        mutation={ADD_MESSAGE}
        variables={formState}
        refetchQueries={() => [{ query: GET_MESSAGES }]}
      >
        {addMessage => <button onClick={addMessage}>Add Message</button>}
      </Mutation>
    </div>
  );
};

const ADD_MESSAGE = gql`
  mutation AddMessage($body: String!, $title: String!, $author: String!) {
    addMessage(body: $body, title: $title, author: $author) {
      author
    }
  }
`;

const GET_MESSAGES = gql`
  {
    messages {
      body
    }
  }
`;
