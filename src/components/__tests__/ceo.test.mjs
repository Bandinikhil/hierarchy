import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CEO from '../CEO';

describe('CEO component', () => {
  const mockData = {
    name: 'Ramesh Kumar',
    position: 'CEO',
    departments: {
      'department1': {
        name: 'Department 1',
        position: 'Head of Department',
        teams: []
      },
      'department2': {
        name: 'Department 2',
        position: 'Head of Department',
        teams: []
      }
    }
  };

  it('renders CEO information and departments', () => {
    const { getByText } = render(<CEO data={mockData} />);
    expect(getByText('Ramesh Kumar')).toBeInTheDocument();
    expect(getByText('CEO')).toBeInTheDocument();
    expect(getByText('Department 1')).toBeInTheDocument();
    expect(getByText('Department 2')).toBeInTheDocument();
  });

  it('handles mouse enter and leave events', () => {
    const { getByTestId } = render(<CEO data={mockData} />);
    const ceoCard = getByTestId('ceo-card');
    fireEvent.mouseEnter(ceoCard);
    expect(ceoCard).toHaveClass('highlighted');
    fireEvent.mouseLeave(ceoCard);
    expect(ceoCard).not.toHaveClass('highlighted');
  });

  it('opens and closes the update employee modal', () => {
    const { getByText, queryByText } = render(<CEO data={mockData} />);
    const updateButton = getByText('Update Employee');
    fireEvent.click(updateButton);
    expect(queryByText('Update Employee Modal')).toBeInTheDocument();
    const closeButton = getByText('Close');
    fireEvent.click(closeButton);
    expect(queryByText('Update Employee Modal')).not.toBeInTheDocument();
  });
});
