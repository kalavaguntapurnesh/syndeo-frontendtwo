import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Form, Input, Row, message } from "antd";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [customer, setCustomer] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [gender, setGender] = useState("Male");
  const [about, setAbout] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  const getCustomerInfo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/getUserData",
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
        <div>
          <h1 className="pb-3 font-medium leading-normal tracking-normal text-2xl lg:text-start text-center">
            Hello, {customer?.firstName} {customer?.lastName}
          </h1>
        </div>

        {customer && (
          <div className=" grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div className="col-span-1">
              <div className="flex flex-col ">
                <div className="flex justify-center items-center mt-[20px] cursor-pointer">
                  <img
                    src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
                    className="rounded-lg w-[90px] h-[90px]"
                    alt=""
                  />
                </div>

                <div className="md:mt-12 mt-4 flex justify-center items-center">
                  <h1 className="text-colorFour text-lg font-semibold">
                    About Yourself
                  </h1>
                </div>
              </div>
              <div className="flex justify-center items-center mt-2">
                <div className="mb-6 w-[98%] flex justify-center items-center">
                  <textarea
                    onChange={(e) => setAbout(e.target.value)}
                    id="about"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-600 bg-white rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write about yourself here..."
                  >
                    {/* {customer.about} */}
                  </textarea>
                </div>
              </div>
              <div className="mt-6 flex justify-center items-center w-full">
                <button
                  className="text-white bg-colorFour hover:bg-green-600 duration-1000 ease-in-out transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg tracking-wide text-sm sm:w-auto py-2.5 px-24 md:px-20 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                <h4 className="mt-8 mb-4 text-colorFour font-semibold text-lg mx-3">
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
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled={true}
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
                  <Col xs={24} md={24} lg={8}>
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
                  </Col>

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
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
                        pattern="[0-9]{3,5}(?:-[0-9]{3,4})?$"
                        title="12345-6789 or 517-126"
                        placeholder="12345-6789 or 517-126"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <div className=" flex justify-center items-center">
                  <Col xs={24} md={24} lg={8} className="my-8">
                    <button
                      class="hover:text-white transition duration-1000 font-semibold text-white bg-colorFour hover:bg-green-600 py-3 px-8 rounded-full"
                      type="submit"
                    >
                      Update Profile
                    </button>
                  </Col>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Layout>

      <div className="w-full bg-white text-gray-500 text-sm rounded-4xl">
        <div className="mx-auto max-w-[600px] py-6">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            <div className="flex justify-center items-center">
              <a href="">© 2024 Syndeo Ltd</a>
            </div>
            <div className="flex justify-center items-center">
              <a href="">Terms</a>
            </div>
            <div className="flex justify-center items-center">
              <a href="">Privacy</a>
            </div>
            <div className="flex justify-center items-center text-colorFour font-bold">
              <a href="">Syndèo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
