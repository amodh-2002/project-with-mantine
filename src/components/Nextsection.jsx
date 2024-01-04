import React from 'react'
import { Button, TextInput,MantineProvider } from '@mantine/core';

const Nextsection = () => {
  return (
    <div>
      <MantineProvider>
        <TextInput label="Username" placeholder="Enter your username" />
        <Button variant="outline" color="blue">Submit</Button>
      </MantineProvider>
    </div>
  )
}

export default Nextsection