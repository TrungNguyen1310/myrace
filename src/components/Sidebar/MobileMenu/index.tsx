import React from 'react'

import { styled } from '@mui/material/styles'
import { Box, SwipeableDrawer } from '@mui/material'
import './style.scss'

interface IMobileMenu {
  toggleDrawer: (value: boolean) => void
  open: boolean
}

const drawerBleeding = 56

const Puller = styled(Box)(() => ({
  width: 32,
  height: 6,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)'
}))

const MobileMenu: React.FC<IMobileMenu> = ({ toggleDrawer = () => undefined, open = false }) => {
  return (
    <SwipeableDrawer
      open={open}
      anchor='bottom'
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true
      }}
      className='swipeableDrawer'
    >
      <div
        className='bg-white dark:bg-black'
        style={{ minHeight: `${window.innerHeight - 126}px` }} // 126px is a distance between the Drawer menu and the top of the device
      >
        <Puller className='bg-black dark:bg-white opacity-50' />
        <div className='text-black dark:text-white py-9 px-6 flex items-center justify-center'>
          menu
        </div>
      </div>
    </SwipeableDrawer>
  )
}

export default MobileMenu
