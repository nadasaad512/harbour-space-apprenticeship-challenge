export default function Hero({ data }) {
  
  const descriptionText = data?.description?.[0]?.data || "A fully funded work-study program to launch your tech career";
  const aboutText = data?.about?.[0]?.data || "Harbour.Space has partnered with Zeptolab to empower driven talent.";
  
  const labelStyle = {
    fontFamily: "Apercu Pro, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.16px",
    color: "#685DC5",
    margin: 0,
  };

  const valueStyle = {
    fontFamily: "Apercu Pro, sans-serif",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.16px",
    color: "#535353",
    marginTop: "4px",
  };

  return (
    <section className="bg-white px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="relative">
          <div className="relative">
            <img
              src="/circle.svg"
              alt=""
              aria-hidden="true"
              style={{
                position: "absolute",
                width: "206px",
                height: "206px",
                top: "-60px",
                left: "220px",
                opacity: 0.2,
                transform: "rotate(-20deg)",
                pointerEvents: "none",
              }}
            />

            <h1
              style={{
                width: "100%",
                maxWidth: "440px",
                fontFamily: "Apercu Pro, sans-serif",
                fontWeight: 500,
                fontSize: "48px",
                lineHeight: "56px",
                letterSpacing: "-0.6px",
                color: "#685DC5",
                position: "relative",
              }}
            >
              {data?.name || "Data Science Apprenticeship"}
            </h1>
          </div>

          <p
            style={{
              width: "100%",
              maxWidth: "440px",
              fontFamily: "Apercu Pro, sans-serif",
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: "32px",
              letterSpacing: "-0.33px",
              color: "#535353",
              marginTop: "48px",
            }}
          >
            {descriptionText}
          </p>

          <p
            style={{
              width: "100%",
              maxWidth: "440px",
              fontFamily: "Apercu Pro, sans-serif",
              fontWeight: 300,
              fontSize: "22px",
              lineHeight: "32px",
              letterSpacing: "-0.33px",
              color: "#535353",
              marginTop: "40px",
            }}
          >
            {aboutText}
          </p>

          <p
            style={{
              width: "100%",
              maxWidth: "438px",
              fontFamily: "Apercu Pro, sans-serif",
              fontSize: "22px",
              lineHeight: "32px",
              letterSpacing: "-0.33px",
              color: "#535353",
              marginTop: "40px",
            }}
          >
            <span style={{ fontWeight: 500 }}>Position:</span>{" "}
            <span style={{ fontWeight: 300 }}>
              {data?.position || "Game Analyst Intern"}
            </span>
          </p>

          <button
            style={{
              width: "166px",
              height: "58px",
              backgroundColor: "#685DC5",
              borderRadius: "29px",
              border: "none",
              fontFamily: "Apercu Pro, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "-0.18px",
              textAlign: "center",
              color: "#FFFFFF",
              cursor: "pointer",
              marginTop: "48px",
              display: "block",
            }}
            className="hover:opacity-90 transition"
          >
            Apply Now
          </button>
        </div>

        {/* Right Column - Info Cards */}
        <div className="relative">
          <img
            src="/BG_Gride.svg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              width: "560px",
              height: "257px",
              top: "245px",
              left: "80px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div className="relative" style={{ zIndex: 1 }}>
            <div className="flex items-center" style={{ gap: "24px" }}>
              <img
                src="/red_logo.svg"
                alt="Logo"
                style={{ width: "80px", height: "80px" }}
              />
              <div>
                <p style={{ opacity: 0.5, margin: 0 }}>Powered by:</p>
                <p style={{ fontSize: "27px", marginTop: "10px" }}>
                  Zeptolab
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "32px",
                width: "100%",
                maxWidth: "480px",
                padding: "24px",
                border: "1px solid #DADADA",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <p style={{ color: "#685DC5", fontWeight: 500 }}>Application closes in</p>
              <p style={{ fontSize: "27px", marginTop: "18px", color: "#535353" }}>
                6 Day : 22 Hrs : 56 Min
              </p>
            </div>

            <div
              style={{
                marginTop: "24px",
                width: "100%",
                maxWidth: "480px",
                padding: "24px",
                border: "1px solid #DADADA",
                borderRadius: "4px",
                backgroundColor: "#FFFFFF",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                rowGap: "32px",
              }}
            >
              <div>
                <p style={labelStyle}>Location</p>
                <p style={valueStyle}>{data?.location?.name || "Barcelona"}</p>
              </div>
              <div>
                <p style={labelStyle}>Duration</p>
                <p style={valueStyle}>{data?.duration || 1} Year</p>
              </div>
              <div>
                <p style={labelStyle}>Start date</p>
                <p style={valueStyle}>{data?.scholarship_start_date?.split(' ')[0] || "30 Nov 2020"}</p>
              </div>
              <div>
                <p style={labelStyle}>End date</p>
                <p style={valueStyle}>{data?.application_end_date?.split(' ')[0] || "22 Nov 2020"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
