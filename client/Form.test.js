import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Form from './src/Components/FormActivity/FormActivity'

describe('<Form /> Mounted', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Form />);
  });
  it('El form debe tener un label que diga: "Nombre"', () => {
      const { container } = render(<Form />)
      const element = container.querySelectorAll('label')[0]
      expect(element.innerHTML).toBe('Nombre:');
  })
})