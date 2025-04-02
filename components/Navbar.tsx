'use client'
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ minHeight: "auto", }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Image src="/assets/images/logo.svg" alt="Logo" width={70} height={40}/>

        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex", color: "hsl(236, 13%, 42%)" } }}>
          {menuItems.map((item, index) => (
            <Typography key={index} sx={{ margin: "0 15px", cursor: "pointer" }}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: "block", md: "none", color: "hsl(236, 13%, 42%)" } }}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
