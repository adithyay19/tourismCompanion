import { Box, Button, ButtonBase, Card, CardActionArea, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, Slide, Typography, Zoom, styled } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function popup(str: any) {
    console.log(str);
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    width: 200, //Custom
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
        
        
      },
      '& .MuiTypography-root': {
        border: '5px solid currentColor',
       
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    backgroundRepeat: 'no-repeat',
    // height: '250px',
    // width: '300px',
    // backgroundOrigin: "content-box",
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 40,
    opacity: 0,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 45,
    transition: theme.transitions.create('width'),
  }));

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Zoom in={true} ref={ref} {...props} />;
  });  




function Destinations() {

    const dest = [
        { id: 1, name: "Alappuzha", url: "src/images/Alappuzha.jpg", about: "Alappuzha, or Alleppey, is a captivating district in Kerala, India, renowned for its picturesque backwaters. A houseboat journey through intricate canals offers a serene experience, while Alappuzha Beach's golden sands and historic pier provide a perfect setting for relaxation and sunset enjoyment. Punnamada Lake hosts the annual Nehru Trophy Boat Race, and the nearby Kumarakom Bird Sanctuary is a haven for bird enthusiasts. Pathiramanal Island serves as a peaceful retreat, while cultural highlights include the Ambalappuzha Sri Krishna Temple and the Krishnapuram Palace. The Chettikulangara Bhagavathy Temple and Edathua Church add a religious and cultural dimension. Marari Beach offers a quieter coastal experience, completing Alappuzha's diverse attractions for those seeking a harmonious blend of backwaters, beaches, temples, and cultural richness." },
        { id: 2, name: "Kochi", url: "src/images/Kochi.jpg", about: "Kochi, a captivating city in Kerala, India, harmoniously merges historical charm with modern vibrancy. Fort Kochi, adorned with colonial architecture and landmarks like St. Francis Church and Chinese fishing nets, provides a glimpse into the city's past. Jew Town's ancient synagogue and Mattancherry's spice markets showcase cultural diversity. Kochi's backwaters offer a tranquil escape, complemented by modern developments like the picturesque Kochi Marine Drive. The Kochi Biennale in Fort Kochi underscores the city's thriving arts scene. The Paradesi Synagogue and Mattancherry Palace with stunning murals add to Kochi's cultural richness. With a lively street food scene, vibrant festivals, and warm hospitality, Kochi seamlessly weaves tradition and modernity, offering a must-visit experience for immersive travelers." },
        { id: 3, name: "Munnar", url: "src/images/Munnar.jpg", about: "Nestled in the Western Ghats of Kerala, Munnar is a captivating hill station renowned for its breathtaking landscapes. The expansive tea plantations, showcased by the Tata Tea Museum, offer a glimpse into colonial history and the art of tea cultivation. Mist-covered mountains, cascading waterfalls like Attukal and Lakkam, and the serene Mattupetty Dam enhance Munnar's beauty. Adventure seekers can trek to Anamudi, South India's highest peak, or explore Eravikulam National Park's biodiversity. Aromatic spice plantations, including the Cardamom Hills, add to Munnar's sensory richness. The region's pleasant climate, charming tea estate accommodations, and the blooming of Neelakurinji flowers every twelve years make Munnar a rejuvenating retreat. With its unique blend of natural splendor, adventure, and a refreshing climate, Munnar invites travelers to immerse themselves in its captivating landscapes and tranquil surroundings." },
        { id: 4, name: "Varkala", url: "src/images/Varkala.jpg", about: "Nestled along Kerala's coastline, Varkala is a captivating seaside haven renowned for its picturesque cliffs, golden beaches, and tranquil ambiance. The iconic Varkala Cliff, adorned with vibrant shops, provides panoramic views of the Arabian Sea, while the celebrated Papanasam Beach at its base is known for its mineral-rich waters believed to hold therapeutic properties. Beyond its coastal allure, Varkala exudes spirituality with the ancient Janardanaswamy Temple perched on the cliffs and the Sivagiri Mutt, a cultural ashram founded by philosopher-saint Sree Narayana Guru. The town's laid-back atmosphere, complemented by the rhythmic sounds of waves, creates an ideal setting for relaxation. Ayurvedic spas and yoga centers along the cliff enhance Varkala's appeal, offering holistic wellness experiences. With its unique blend of natural beauty, spiritual significance, and a relaxed beach vibe, Varkala is a serene coastal escape that beckons travelers seeking culture, rejuvenation, and breathtaking sunsets." },
        { id: 5, name: "Wayanad", url: "src/images/Wayanad.jpg", about: "In the lush landscapes of Kerala, Wayanad is a captivating hill station embraced by verdant hills, dense forests, and vibrant biodiversity. Sprawling tea and spice plantations create a serene haven for nature enthusiasts. Chembra Peak, Wayanad's highest point, invites adventure seekers with panoramic views and popular trekking trails. Meenmutty Falls cascades majestically, Edakkal Caves showcase prehistoric carvings, and Pookode Lake, surrounded by evergreen forests, offers tranquility. The Thirunelli Temple, nestled amidst mountains and dense woods, adds a spiritual touch. Wildlife enthusiasts can explore Wayanad Wildlife Sanctuary's diverse flora and fauna through thrilling safaris. Eco-friendly accommodations seamlessly blending with nature, pleasant climate, and cultural treasures make Wayanad an ideal destination for those seeking serenity and a deep connection with Kerala's vibrant landscapes." },
        { id: 6, name: "Kannur", url: "src/images/Kannur.jpg", about: "On Kerala's northern coast, Kannur seamlessly blends history, culture, and natural splendor. The Arabian Sea graces picturesque beaches like Payyambalam and Muzhappilangad Drive-in Beach, offering serene escapes. St. Angelo Fort and Thalassery Fort, architectural marvels, narrate the region's colonial history against a stunning sea backdrop. Kannur is renowned for vibrant Theyyam performances, immersing visitors in Northern Kerala's rich folklore. The thriving handloom industry at Kannur Handloom Weavers' Cooperative Society showcases meticulous craftsmanship. The tranquil Muthappan Temple along the Parassinikadavu River provides a spiritual retreat. Beyond cultural richness, Kannur unveils natural wonders like Meenkunnu Beach and the lush Aralam Wildlife Sanctuary. Traditional dance forms, handloom heritage, and a harmonious blend of history and natural beauty make Kannur an irresistible destination for those seeking an authentic and diverse Kerala experience." }
    ];
    
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(1);

    const openDialog = (value: any) => {
        setOpen(true);
        setId(value);
    };
    const closeDialog = () => {
        setOpen(false);
    };


    const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


    return(
        <Box
            id = 'destinations'
            sx = {{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                width: '100%',
                color: 'white',
                
                // flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container
                sx = {{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid container spacing={2} sx={{alignItems:'center', justifyContent:'center'}}>
                    
                        {dest.map((d) => (
                            <Grid xs={2} sm={4} md={4}>
                                <ImageButton
                                    focusRipple
                                    key={d.name}
                                    onClick={() => openDialog(d.id)}
                                    style={{
                                        width: '80%',
                                        // height: '100px',
                                    }}
                                >          
                                    <ImageSrc style={{ backgroundImage: `url(${d.url})` }} />   
                                    <ImageBackdrop className="MuiImageBackdrop-root" />
                                    <Image>
                                        <Typography
                                            component="span"
                                            variant="subtitle1"
                                            color="inherit"
                                            sx={{
                                                position: 'relative',
                                                p: 4,
                                                pt: 2,
                                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
                                            }}
                                        >
                                            {d.name}
                                            <ImageMarked className="MuiImageMarked-root" />
                                        </Typography>
                                    </Image>          
                                </ImageButton>

                                {/* DIALOG SECTION */}

                                <BootstrapDialog
                                    open={open}
                                    onClose={closeDialog}
                                    scroll='paper'
                                    TransitionComponent={Transition}
                                    aria-labelledby="scroll-dialog-title"
                                    aria-describedby="scroll-dialog-description"
                                    
                                    
                                >
                                    <DialogTitle id="scroll-dialog-title">{dest[id-1].name}</DialogTitle>
                                    <IconButton
                                        aria-label="close"
                                        onClick={closeDialog}
                                        sx={{
                                            position: 'absolute',
                                            right: 8,
                                            top: 8,
                                            color: (theme) => theme.palette.grey[500],
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <DialogContent
                                        className="MuiDialogContent-root"
                                        dividers
                                        sx={{
                                            backgroundImage: `url(${dest[id-1].url})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            color: 'white',
                                            
                                        }}
                                        color="white"
                                    >
                                        <DialogContentText
                                            id="scroll-dialog-description"
                                            ref={descriptionElementRef}
                                            tabIndex={-1}
                                            sx={{
                                                color: 'white',
                                            }}
                                        >
                                            {dest[id-1].about}
                                        </DialogContentText>
                                    </DialogContent>
                                </BootstrapDialog>


                            </Grid>
                        ))}
                    
                </Grid>
            </Container>

        </Box>
    );
}

export default Destinations;