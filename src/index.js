import React from 'react';
import { createRoot } from 'react-dom/client';

async function check() {
  await fetch('https://google.com');
}

check()
  .then(() => {
    console.log('success');
  })
  .catch(() => {
    console.log('error');
  });
