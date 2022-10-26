import styled from '@emotion/styled';

export const Status = styled.span`
  margin-right: 10px;
  color: ${props => {
    if (props.$type) return 'green';
    else return 'red';
  }};

  svg {
    width: 15px;
  }
`;

// ${props => {
//     switch (props.type) {
//       case 'true':
//         return 'green';
//       case 'false':
//         return 'red';
//       default:
//         return 'black';
//     }
//   }};

export const Friend = styled.section`
  background-color: bisque;
  width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const Container = styled.ul`
  width: 500px;
  background-color: beige;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgb(232, 216, 158);
  width: 300px;
  justify-content: center;
  &:hover,
  &:focus {
    color: rgb(81, 202, 6);
    box-shadow: 3px 3px rgb(241, 253, 133), -1em 0 0.4em rgb(226, 242, 148);
  }
`;

export const Name = styled.p`
  font-size: 25px;
  margin-left: 15px;
`;

export const Avatar = styled.img`
  size: 10px;
`;
