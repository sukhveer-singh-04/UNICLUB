import { Grid } from "@nextui-org/react";
import {getAllClubs} from "../api";
import ClubCard from "./ClubCard";
import {useEffect, useState} from "react";

export const Content = () => {
  const [clubs, setClubs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllClubs()
      .then(({data}) => {
        setClubs(data.data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const grids = clubs.map(({name, displayName, imageURL}) => (
    <Grid xs={12} sm={5}>
      <ClubCard name={name} displayName={displayName} imageURL={imageURL} />
    </Grid>
  ))

  return isLoading
    ? (<div>Clubs are getting loaded!</div>)
    : (
      <Grid.Container gap={2} justify="center">
        {grids}
      </Grid.Container>
    )
};

