import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div className='bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 pb-4 w-full'>
      <MainNavigation />
      <div className='lg:h-3 h-16'></div>
      <div className='container mx-auto rounded-xl bg-white dark:bg-[#111111] px-6 md:px-10'>
        <div className='py-6'>{props.children}</div>
        <footer className='overflow-hidden'>
          <p className='text-center py-3 dark:text-light-text'>
            © 2023 All Rights.
          </p>
        </footer>
      </div>
    </div>
  );
}
export default Layout;
