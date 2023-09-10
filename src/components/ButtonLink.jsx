import { Button } from "@material-tailwind/react";
 
export function ButtonLink(props) {
  return (
    <div className="flex items-center gap-4">
      <a href="#buttons-with-link">
        <Button onClick={props.onClick} variant="outlined" color="light-blue">Ver Más Cocinas</Button>
      </a>
    </div>
  );
}