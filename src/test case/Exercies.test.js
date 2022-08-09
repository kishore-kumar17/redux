import { render, fireEvent} from '@testing-library/react';
import Exercies from './Exercies';

test('renders learn react link', () => {     
  const {getByTestId} = render(<Exercies />);

//   const linkElement = getByTestId('cityname');
  const username = getByTestId('username');
  const email = getByTestId('email');   
//   const btn = getByTestId('btn');

  fireEvent.change(username,{target:{name:"name",value:"kingston"}});
  fireEvent.change(email,{target:{name:"email",value:"kingston"}});
  // fireEvent.click(btn);

  console.log("username.value",username.value)

  // expect(linkElement).toBeInTheDocument();
  expect(email.value).toBe('kk kk ');

});