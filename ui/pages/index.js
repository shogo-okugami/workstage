import Layout from "@/components/layouts/Layout";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';

const Home = () => {
  return (
    <>
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        locales={[jaLocale]}         
        locale='ja'
      />
    </>
  )
}

Home.getLayout = (page)=>{

  return <Layout title={"シフト"} >{page}</Layout>

}

export default Home
