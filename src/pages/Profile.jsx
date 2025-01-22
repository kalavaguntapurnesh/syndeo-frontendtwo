import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Form, Input, Row, message } from "antd";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Select from "react-select";
import { CiSearch } from "react-icons/ci";
import { MdCategory } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SlGraph } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { MdFilterAlt } from "react-icons/md";
// import { Country, State, City } from "country-state-city";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [customer, setCustomer] = useState(null);
  //   const [selectedCountry, setSelectedCountry] = useState(null);
  //   const [selectedState, setSelectedState] = useState(null);
  //   const [selectedCity, setSelectedCity] = useState(null);
  const [gender, setGender] = useState("Male");
  const [about, setAbout] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  const getCustomerInfo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getUserData",
        // "https://backend-syndeo.onrender.com/api/v1/getUserData",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data) {
        setCustomer(response.data.data);
        console.log("The customer data is : ", customer);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    getCustomerInfo();
    //eslint-disable-next-line
  }, []);

  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/updateProfile",
        // "https://backend-syndeo.onrender.com/api/v1/updateProfile",
        {
          ...values,
          userId: user._id,
          about,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.status === 200) {
        Swal.fire({
          title: "Profile Updated Successfully",
          icon: "success",
        });
        navigate("/dashboard");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <div>
      <Layout>
        <div className="lg:flex items-center justify-between">
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Hello, {customer?.firstName} {customer?.lastName}
          </h1>
          <div className="lg:flex gap-3 ">
            <div className="relative">
              <span className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl font-bold text-colorFour">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search for an event"
                className="w-full py-2 pl-8 border border-gray-300 rounded focus:outline-none hover:border-colorFour transition-colors duration-300 "
              />
            </div>

            <div className="lg:flex grid grid-cols-2 gap-2 lg:mt-0 mt-4">
              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <MdCategory />
                </span>
                <div>All Categories</div>
                <span
                  className="text-2xl   hover:bg-white cursor-pointer"
                  onClick={() => setCategoryOpen(!categoryOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {categoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white z-10 rounded p-2">
                    <ul>
                      <li className="p-2">Category 1</li>
                      <li className="p-2">Category 2</li>
                      <li className="p-2">Category 3</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <SlGraph />
                </span>
                <div>All Status</div>
                <span
                  className="text-2xl   hover:bg-white cursor-pointer"
                  onClick={() => setStatusOpen(!statusOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {statusOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white z-10 rounded p-2">
                    <ul>
                      <li className="p-2">Status 1</li>
                      <li className="p-2">Status 2</li>
                      <li className="p-2">Status 3</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl font-bold">
                  <FaLocationDot />
                </span>
                <div>All Location</div>
                <span
                  className="text-2xl   hover:bg-white cursor-pointer"
                  onClick={() => setLocationOpen(!locationOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {locationOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white  rounded p-2 z-10">
                    <ul>
                      <li className="p-2">Location 1</li>
                      <li className="p-2">Location 2</li>
                      <li className="p-2">Location 3</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="relative flex gap-4 items-center justify-between bg-gray-300 p-2 rounded">
                <span className="text-colorFour text-xl">
                  <MdFilterAlt />
                </span>
                <div>Advance Filter</div>
                <span
                  className="text-2xl   hover:bg-white cursor-pointer"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <RiArrowDropDownLine />
                </span>
                {filterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white  rounded p-2 z-10">
                    <ul>
                      <li className="p-2">Filter 1</li>
                      <li className="p-2">Filter 2</li>
                      <li className="p-2">Filter 3</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {customer && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div className="col-span-1">
              <div className="flex flex-col ">
                <div className="flex justify-center items-center mt-[20px] cursor-pointer">
                  <img
                    src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
                    className="rounded w-[90px] h-[90px]"
                    alt="image"
                  />
                </div>

                <div className="md:mt-12 mt-4 flex justify-center items-center">
                  <h1 className="text-colorFour text-lg font-semibold">
                    About Yourself
                  </h1>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <div className="mb-6 w-[100%] flex justify-center items-center">
                  <textarea
                    onChange={(e) => setAbout(e.target.value)}
                    id="about"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-600 bg-white rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write about yourself here..."
                  >
                    {/* {customer.about} */}
                  </textarea>
                </div>
              </div>
              <div className="mt-6 flex justify-center items-center w-[100%]">
                <button
                  className="text-white bg-colorFour hover:bg-white duration-1000 ease-in-out transition border border-colorFour font-medium rounded tracking-wide text-sm py-2.5 w-full text-center hover:text-colorFour"
                  onClick={() => {
                    navigate(`/bookings/${user?._id}`);
                  }}
                >
                  My Schedules
                </button>
              </div>
            </div>

            <div className="col-span-3">
              <Form
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{
                  ...customer,
                }}
              >
                <h4 className="mt-8 mb-4 text-colorFour font-semibold text-lg mx-1">
                  Personal Details :{" "}
                </h4>
                <Row gutter={20}>
                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Input
                        type="text"
                        placeholder="first name"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Middle Name"
                      name="middleName"
                      className="font-medium"
                    >
                      <Input
                        type="text"
                        placeholder="middleName"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Input
                        type="text"
                        placeholder="lastName"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Email"
                      name="email"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Input
                        type="email"
                        placeholder="your email address"
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled={true}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Role"
                      name="role"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Input type="text" className="p-2" disabled={true} />
                    </Form.Item>
                  </Col>

                  {/* <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Country"
                      name="selectedCountry"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Select
                        options={Country.getAllCountries()}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        value={selectedCountry}
                        onChange={(item) => {
                          setSelectedCountry(item);
                        }}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="State"
                      name="selectedState"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Select
                        options={State?.getStatesOfCountry(
                          selectedCountry?.isoCode
                        )}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        value={selectedState}
                        onChange={(item) => {
                          setSelectedState(item);
                        }}
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="City"
                      name="selectedCity"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Select
                        options={City.getCitiesOfState(
                          selectedState?.countryCode,
                          selectedState?.isoCode
                        )}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        value={selectedCity}
                        onChange={(item) => {
                          setSelectedCity(item);
                        }}
                      />
                    </Form.Item>
                  </Col> */}

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Phone No."
                      name="phoneNumber"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Input
                        type="text"
                        className="p-2"
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                        title="123-456-7890"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Street Name"
                      name="streetName"
                      className="font-medium"
                    >
                      <Input
                        type="text"
                        placeholder="your street name"
                        className="p-2"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Zip / Postal Code"
                      name="postalCode"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Input
                        type="text"
                        className="p-2"
                        // pattern="[0-9]{3,5}(?:-[0-9]{3,4})?$"
                        title="12345-6789 or 517-126"
                        placeholder="12345-6789 or 517-126"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Gender"
                      name="gender"
                      required
                      rules={[{ required: true }]}
                      className="font-medium"
                    >
                      <Select
                        onChange={setGender}
                        label="Age"
                        options={options}
                      ></Select>
                    </Form.Item>
                  </Col>
                </Row>

                <div className="flex justify-center items-center">
                  <Col xs={24} md={24} lg={8} className="my-8">
                    <div className="flex justify-center items-center">
                      <button
                        className="transition duration-1000 font-semibold text-white bg-colorFour border-colorFour border py-3 lg:px-20 px-12 rounded hover:bg-white hover:text-colorFour hover:font-medium"
                        type="submit"
                      >
                        Update Profile
                      </button>
                    </div>
                  </Col>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default Profile;
