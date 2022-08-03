import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    image: <img src="https://imgs.search.brave.com/oF7rkHtXdIIY-dlici7M3oRuMvvUmxf16jkc2dGBKD8/rs:fit:678:800:1/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFDZFR1VmlPS0wu/X0FDX1VMODAwX1FM/NjVfLmpwZw" width="180px" height="200px"/>,
    name: 'FNAF: The Fazbear Cringe',
    desc: 'Cringe Audiobooks',
    price: '$9.99',
  },
  {
    image: <img src="https://imgs.search.brave.com/YAVwFMir6DPol8wR_wjTCul_wFLwn-5JDVN2Z5VNk24/rs:fit:990:1200:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/Ly1ZeUx1SE13b2tn/WS9WUFRCVjB5MkN1/SS9BQUFBQUFBQUhP/SS8yVUdNa0VDMVcz/by9zMTYwMC90aGVn/aXZlci5qcGc" width="180px" height="200px"/>,
    name: '"The Giver" by Lois Lowry',
    desc: '10/10 Inspiring Read',
    price: '$3.45',
  },
  {
    image: <img src="https://imgs.search.brave.com/qNqiA1s9eeEhbVDTBXu3XR2EcLQFYXofhmQDIc-GFfE/rs:fit:1200:1200:1/g:ce/aHR0cDovL2ltYWdl/czIuZmFucG9wLmNv/bS9pbWFnZXMvcGhv/dG9zLzc2MDAwMDAv/Q29yYWxpbmUtYm9v/ay1jb3JhbGluZS03/NjQ1Nzk3LTE4MTUt/MjU2MC5qcGc" width="180px" height="200px"/>,
    name: '"Coraline" by Neil Gaimen',
    desc: 'A Spooky Read',
    price: '$6.51',
  },
  {
    image: <img src="https://imgs.search.brave.com/f-7_N2zLXiS-lt63Nekr-QAz74fBwbfo1fKFZPPPThI/rs:fit:317:475:1/g:ce/aHR0cHM6Ly9pLmdy/LWFzc2V0cy5jb20v/aW1hZ2VzL1MvY29t/cHJlc3NlZC5waG90/by5nb29kcmVhZHMu/Y29tL2Jvb2tzLzE1/ODkxNDY1MDFsLzUz/MzYzOTA2Ll9TWTQ3/NV8uanBn" width="180px" height="200px"/>,
    name: 'REDACTED',
    desc: 'Not  Authorized to Read',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses =[
  '9824 Hill Field St. Charlottesville, VA 22901'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr Dorsey' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            {product.image}
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Bruce Dorsey</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}