import CardList from '@/components/card/CardList';
import DashboardStyle from './dashboard.style';

const Dashboard = () => {
  return (
    <>
      <DashboardStyle>
        <CardList>To Do</CardList>
        <CardList>On Progress</CardList>
        <CardList>Done</CardList>
      </DashboardStyle>
    </>
  );
};

export default Dashboard;
