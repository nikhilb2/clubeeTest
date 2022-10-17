import { Typography, Stack, IconButton, Box } from "@mui/material"
import React from "react"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import { moreStyles } from "src/theme"
import Link from "next/link"
import Image from "next/image"
const NewsPage = () => {
  return (
    <>
      <Link href="/news">
        <a>
          <Stack direction="row" spacing={1} padding={2} alignItems="center">
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
            <Typography sx={moreStyles.link}>Back to news</Typography>
          </Stack>
        </a>
      </Link>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <Stack>
            <Image
              src="/img/placeholder-image.png"
              width="1090px"
              height={"595px"}
              objectFit="contain"
            />
          </Stack>
          <Stack
            direction={"row"}
            spacing={{ xs: 4, md: 4 }}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Typography fontSize={{ md: "18px", xs: "14px" }}>
              {" "}
              <Box
                component="span"
                sx={{
                  color: "#A3A3A3",
                }}
              >
                By:
              </Box>{" "}
              Nikhil Bhatia
            </Typography>
            <Typography fontSize={{ md: "18px", xs: "14px" }}>
              {" "}
              <Box
                component="span"
                sx={{
                  color: "#A3A3A3",
                }}
              >
                Date:
              </Box>{" "}
              18th Oct 2022
            </Typography>
            <Typography fontSize={{ md: "18px", xs: "14px" }}>
              {" "}
              <Box
                component="span"
                sx={{
                  color: "#A3A3A3",
                }}
              >
                Published on:
              </Box>{" "}
              Clubee news
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={3} p={4}>
          <Typography
            variant="h2"
            fontSize={{ md: "40px", xs: "24px" }}
            textAlign="center"
            fontWeight={500}
          >
            Singapore Licensing VASPs – Complying with AML/CTF requirements on
            virtual assets
          </Typography>
          <Typography fontSize={{ md: "18px", xs: "14px" }}>
            Singapore’s Central Bank, the Monetary Authority of Singapore (MAS)
            is preparing to hand out payment services licenses to virtual asset
            service providers (VASPs) as reported by the South China Morning
            Post1 earlier this month. The Central Bank notified several
            applicants (out of 170) that they will get licensed to operate in
            the city-state if they put in place measures to meet the
            requirements set by the MAS. Some applicants did not meet its
            standards “in the area of money laundering and terrorism financing
            and technology risk controls”: two applications had already been
            rejected while 30 were withdrawn. The Authority already granted 2
            in-principle approvals to an Australian exchange and a Singaporean
            bank2 last week. Singapore is one of the crypto hubs in Asia along
            with Hong Kong that also recently implemented stricter rules on
            cryptocurrencies. The news was welcomed by the crypto industry as
            some believe it will help increase crypto adoption of institutions
            notably and attract virtual asset companies to the city.
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default NewsPage
