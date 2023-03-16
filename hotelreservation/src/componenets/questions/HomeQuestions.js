import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Heading } from "@chakra-ui/react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function HomeQuestions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Heading>Sıkça Sorulan Sorular</Heading>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            Bu site, en ucuz otel fiyatlarını nasıl sunuyor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Türkiye’nin seyahat sitesi Enuygun, konaklama yapmak istediğiniz
            destinasyon ve tarihe göre yüzlerce otel seçeneğini karşılaştırır ve
            listeler. Listelenen otelleri; fiyata göre artan ya da azalan, puana
            göre, merkeze yakınlığına göre ve ilgiye göre sıralamayı tercih
            edebilirsiniz. Konuk değerlendirmesi, en yakın merkeze uzaklığı,
            pansiyon tipi, rezervasyon iptali, tema gibi birçok filtreye göre
            otelleri listeleyebilir, kendinize en uygun olan oteli
            seçebilirsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Otel rezervasyonunu nasıl yapabilirim?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Otel rezervasyonu yapmak için web sitemizi kullanabilirsiniz.
            Konaklamak istediğiniz yeri ve konaklama tarihlerinizi seçerek
            yüzlerce tesisi karşılaştırabilir, size en uygun oteli ve odayı
            seçerek güvenle ve hızla rezervasyon yapabilirsiniz. Siteye üyelik
            oluşturarak konuk bilgilerinizi kaydederseniz saniyeler içerisinde
            işleminizi tamamlayabilirsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
