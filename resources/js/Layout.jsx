import SiteLayout from "./SiteLayout";
import NestedLayout from "./NestedLayout";

const Home = ({ user }) => {
    return (
        <>
            <H1>Welcome</H1>
            <p>Hello {user.name}, welcome to your first Inertia app!</p>
        </>
    );
};

Home.layout = (page) => (
    <SiteLayout title="Welcome">
        <NestedLayout children={page} />
    </SiteLayout>
);

export default Home;
