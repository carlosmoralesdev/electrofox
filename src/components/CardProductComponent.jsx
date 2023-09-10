import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardProductComponent(props) {

    const { img, title, price, description, id, offer, offerPrice } = props

    return (
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="background-transparent">
          <img
            src={img}
            alt="card-image"
            className="rounded-xl cardimg-settings h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 items-center">
            <Typography style={{margin: '0px'}} color="blue-gray" className="font-medium text-center">
              <b>{title}</b>
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {offer ? 
              <>
                <b className="text-color-green">${offerPrice + " (Oferta)"}</b>
                <a>{" "}</a>
                <a className="text-medium-line">{' $' + price}</a>
              </>
              :
              <>
                ${price}
              </>
              }
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-2lines"
          >
            {description}
          </Typography>
        </CardBody>
{/*         <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Ver
          </Button>
        </CardFooter> */}
      </Card>
    );
  }