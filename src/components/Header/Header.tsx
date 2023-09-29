import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4 mx-auto font-bold text-2xl">
        PHOTOS APP
        <div className="flex items-center space-x-4 ml-auto">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
