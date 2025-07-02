/* eslint-disable @next/next/no-img-element */
import { SearchInput } from "@/components/molecules/SearchInput/SearchInput";
import Image from "next/image";
import { Button } from "@/components/atoms/Button/Button";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

export const chatList = [
  {
    id: "1",
    avatar: "/assets/inbox/inbox-users/jerome.svg",
    name: "Jerome Bell",
    lastMessage: "We almost done with brief!",
    timestamp: "01.00",
  },
  {
    id: "2",
    avatar: "/assets/inbox/inbox-users/kristin.svg",
    name: "Kristin Watson",
    lastMessage: "Hi! I have some money tod...",
    timestamp: "02.15",
  },
  {
    id: "3",
    avatar: "/assets/inbox/inbox-users/theresa.svg",
    name: "Theresa Webb",
    lastMessage: "Will immediately pay according to t...",
    timestamp: "Jan 12",
  },
  {
    id: "4",
    avatar: "/assets/inbox/inbox-users/floyd.svg",
    name: "Floyd Miles",
    lastMessage: "I hope you will be fine without payme...",
    timestamp: "Jan 12",
  },
  {
    id: "5",
    avatar: "/assets/inbox/inbox-users/jacob.svg",
    name: "Jacob Jones",
    lastMessage: "You are great aleasi make that much...",
    timestamp: "Jan 10",
  },
  {
    id: "6",
    avatar: "/assets/inbox/inbox-users/jenny.svg",
    name: "Jenny Wilson",
    lastMessage: "You are great aleasi make that...",
    timestamp: "Jan 09",
  },
];

export const InboxTemplate = () => {
  return (
    <section className="w-full h-full bg-gray-100 pt-8 pl-10 font-urbanist">
      <div className="w-full h-full bg-white p-6 flex space-x-6">
        <div className="flex flex-col h-full w-1/4 space-y-3">
          <SearchInput placeholder="Search..." className="rounded-xl" />
          {chatList.map((chat, index) => (
            <div key={index} className="flex flex-col space-y-4 w-full mt-8">
              <div className="w-full flex items-center justify-center space-x-4">
                <div className="rounded-full flex items-center justify-center">
                  <Image
                    alt=""
                    src={chat.avatar}
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                  ></Image>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-base font-bold text-interface1">
                    {chat.name}
                  </span>
                  <span className="text-sm text-interface2 font-medium">
                    {chat.timestamp}
                  </span>
                </div>
              </div>
              <div className="w-full flex text-start items-center">
                <p className="text-sm font-medium text-interface2">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2 flex flex-col h-full font-urbanist">
          <div className="w-full flex justify-between border-b-1 border-b-gray-100 pb-4 ">
            <div className="flex space-x-4">
              <div className="flex justify-center items-center rounded-full">
                <Image
                  alt=""
                  src={"/assets/inbox/inbox-users/kristin.svg"}
                  className="rounded-full object-cover"
                  width={48}
                  height={48}
                ></Image>
              </div>
              <div className="flex flex-col justify-center items-start space-y-2">
                <span className="text-base font-bold text-interface1">
                  Angela Vatiga
                </span>
                <span className="text-xs text-primary font-medium">Online</span>
              </div>
            </div>

            <div className="flex space-x-4 justify-center items-center ">
              <Image
                alt="videocam image"
                src={"/assets/inbox/inbox-icons/videocall.svg"}
                width={40}
                height={40}
              ></Image>
              <Image
                alt="phone icon"
                src={"/assets/inbox/inbox-icons/phone.svg"}
                width={40}
                height={40}
              ></Image>
              <Image
                alt="options icon"
                src={"/assets/inbox/inbox-icons/vertical-options.svg"}
                width={40}
                height={40}
              ></Image>
            </div>
          </div>
          <div className="w-full flex flex-col px-4 py-8 space-y-8 h-full">
            <div className="flex items-center justify-start w-full">
              <div className="flex flex-col space-y-2 w-3/5">
                <div className="flex space-x-2 w-full items-center justify-center">
                  <div className="bg-gray-100 flex justify-start items-center px-2  py-4 rounded-tl-xl rounded-tr-xl rounded-br-xl w-full">
                    <p className="text-xs font-medium text-interface1 w-4/5 ml-2">
                      Auctor urna, varius duis suspendisse mi in dictum.
                      Interdum egestas ut porttitor tortor aliquet massa.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      alt=""
                      src={"/assets/inbox/inbox-icons/share-icon.svg"}
                      className="text-interface2"
                      width={20}
                      height={20}
                    ></Image>
                  </div>
                </div>
                <div className="flex space-x-4 w-full items-center justify-start">
                  <span className="text-xs text-interface1 font-bold">
                    Stefanie Ang
                  </span>
                  <span className="text-xs text-interface2 font-medium">
                    08:23 AM
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end w-full">
              <div className="flex flex-col space-y-2 w-3/5">
                <div className="flex space-x-2 w-full items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Image
                      alt=""
                      src={"/assets/inbox/inbox-icons/share-icon.svg"}
                      className="text-interface2"
                      width={20}
                      height={20}
                    ></Image>
                  </div>
                  <div className="bg-interface1 flex justify-start items-center px-2  py-4 rounded-tl-xl rounded-tr-xl rounded-br-xl w-full">
                    <p className="text-xs font-medium text-white w-4/5 ml-2">
                      Auctor urna, varius duis suspendisse mi in dictum.
                      Interdum egestas ut porttitor tortor aliquet massa.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 w-full items-center justify-end">
                  <div className="rounded-3xl flex justify-center items-center px-2 border-primary border-1">
                    👍
                  </div>
                  <span className="text-xs text-interface2 font-medium">
                    08:23 AM
                  </span>
                  <span className="text-interface1 text-sm font-bold">You</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start w-full">
              <div className="flex items-center justify-start w-full">
                <div className="flex flex-col space-y-2 w-3/5">
                  <div className="flex space-x-2 w-full items-center justify-center">
                    <div className="bg-gray-100 flex justify-start items-center px-2  py-4 rounded-tl-xl rounded-tr-xl rounded-br-xl w-full">
                      <p className="text-xs font-medium text-interface1 w-4/5 ml-2">
                        Auctor urna, varius duis suspendisse mi in dictum.
                        Interdum egestas ut porttitor tortor aliquet massa.
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <Image
                        alt=""
                        src={"/assets/inbox/inbox-icons/share-icon.svg"}
                        className="text-interface2"
                        width={20}
                        height={20}
                      ></Image>
                    </div>
                  </div>
                  <div className="flex space-x-4 w-full items-center justify-start">
                    <span className="text-xs text-interface1 font-bold">
                      Stefanie Ang
                    </span>
                    <span className="text-xs text-interface2 font-medium">
                      10:00 AM
                    </span>
                    <div className="flex justify-center items-center space-x-2">
                      <span className="flex justify-center items-center border-primary border-1 px-2 rounded-3xl">
                        😊
                      </span>
                      <span className="flex justify-center items-center border-primary border-1 px-2 rounded-3xl">
                        💥
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end w-full">
              <div className="flex flex-col space-y-2 w-3/5">
                <div className="flex space-x-2 w-full items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Image
                      alt=""
                      src={"/assets/inbox/inbox-icons/share-icon.svg"}
                      className="text-interface2"
                      width={20}
                      height={20}
                    ></Image>
                  </div>
                  <div className="bg-interface1 flex justify-start items-center px-2  py-4 rounded-tl-xl rounded-tr-xl rounded-br-xl w-full">
                    <p className="text-xs font-medium text-white w-4/5 ml-2">
                      Auctor urna, varius duis suspendisse mi in dictum.
                      Interdum egestas ut porttitor tortor aliquet massa.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4 w-full items-center justify-end">
                  <span className="text-xs text-interface2 font-medium">
                    10:12 AM
                  </span>
                  <span className="text-interface1 text-sm font-bold">You</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-4 space-y-4 justify-center items-center">
            <textarea
              placeholder="Type your message"
              name=""
              id=""
              className="w-full border-gray-100 border-1 px-4 py-2 min-h-20 rounded-lg placeholder-interface2"
            ></textarea>
            <div className="flex justify-between items-end w-full">
              <div className="flex space-x-2 justify-center items-center">
                <Image
                  alt="photo icon"
                  width={24}
                  height={24}
                  src={"/assets/inbox/inbox-icons/photo-icon.svg"}
                ></Image>
                <Image
                  alt=" share icon"
                  width={24}
                  height={24}
                  src={"/assets/inbox/inbox-icons/link-icon.svg"}
                ></Image>
                <Image
                  alt="smile icon"
                  width={24}
                  height={24}
                  src={"/assets/inbox/inbox-icons/mood-smile-icon.svg"}
                ></Image>
              </div>
              <Button
                variant="primary"
                className="text-sm font-bold px-10 py-3"
              >
                SEND
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/4 space-y-4 h-full">
          <div className="flex flex-col space-y-2 items-center justify-center relative w-full h-1/3">
            <span className="rounded-full border-1 border-gray-200 flex justify-center items-center w-10 h-10 absolute top-1 right-3">
              <RxCross2 className="text-interface2 size-5" />
            </span>
            <div className="rounded-full w-[100px] h-[100px]">
              <Image
                className="object-cover w-full h-full"
                alt="user icon"
                src={"/assets/inbox/inbox-users/jacob.svg"}
                width={100}
                height={100}
              ></Image>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center mt-4">
              <span className="text-lg font-bold text-interface1">
                Angela Vatiga
              </span>
              <span className="text-interface2 text-sm font-medium">
                SEO Expert
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full px-6 space-y-2">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col space-y-1 items-start justify-center">
                <span className="text-sm font-bold text-interface1">
                  Recent files
                </span>
                <span className="text-sm font-medium text-interface2">
                  120 files
                </span>
              </div>
              <IoIosArrowDown className="text-interface2 size-5" />
            </div>
            <div className="flex flex-col space-y-6 mt-4">
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center space-x-4">
                  <IoDocumentTextOutline className="text-interface2 size-5" />
                  <span className="text-interface2 text-sm font-bold">
                    InvoiceXX.pdf
                  </span>
                </div>
                <SlOptions className="text-interface2" />
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center space-x-4">
                  <IoDocumentTextOutline className="text-interface2 size-5" />
                  <span className="text-interface2 text-sm font-bold">
                    Invoice00.pdf
                  </span>
                </div>
                <SlOptions className="text-interface2" />
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex justify-center items-center space-x-4">
                  <IoDocumentTextOutline className="text-interface2 size-5" />
                  <span className="text-interface2 text-sm font-bold">
                    Document.docx
                  </span>
                </div>
                <SlOptions className="text-interface2" />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-6 justify-center items-center px-6 mt-6">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col space-y-1 items-start justify-center">
                <span className="text-sm font-bold text-interface1">
                  Images
                </span>
                <span className="text-sm font-medium text-interface2">
                  80 Images
                </span>
              </div>
              <IoIosArrowDown className="text-interface2 size-5" />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
              <div className="w-full h-[120px] rounded-xl flex justify-center items-center">
                <img
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                  src={"/assets/inbox/inbox-images/image-1.svg"}
                ></img>
              </div>
              <div className="w-full h-[120px] rounded-xl flex justify-center items-center">
                <img
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                  src={"/assets/inbox/inbox-images/image-2.svg"}
                ></img>
              </div>
              <div className="w-full h-[120px] rounded-xl flex justify-center items-center">
                <img
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                  src={"/assets/inbox/inbox-images/image-3.svg"}
                ></img>
              </div>
              <div className="w-full h-[120px] rounded-xl flex justify-center items-center">
                <img
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                  src={"/assets/inbox/inbox-images/image-4.svg"}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
