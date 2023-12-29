import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("3920f20b-0f36-45da-91b8-b5d0d1bcd0f5")
    return ( 
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} />
            </div>
        </Container>
     );
}
 
export default HomePage;