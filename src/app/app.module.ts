import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-tabset';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { AccordionModule } from "ngx-accordion";
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { FooterStyleOneComponent } from './components/common/footer-style-one/footer-style-one.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { FooterStyleThreeComponent } from './components/common/footer-style-three/footer-style-three.component';
import { FreeTrialStyleOneComponent } from './components/common/free-trial-style-one/free-trial-style-one.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { PricingStyleOneComponent } from './components/common/pricing-style-one/pricing-style-one.component';
import { ScreenshotsStyleOneComponent } from './components/common/screenshots-style-one/screenshots-style-one.component';
import { DownloadAppStyleOneComponent } from './components/common/download-app-style-one/download-app-style-one.component';
import { ProgressStyleOneComponent } from './components/common/progress-style-one/progress-style-one.component';
import { HomeoneFeaturesComponent } from './components/pages/home-demo-one/homeone-features/homeone-features.component';
import { FeaturesStyleOneComponent } from './components/common/features-style-one/features-style-one.component';
import { HomeoneVideoComponent } from './components/pages/home-demo-one/homeone-video/homeone-video.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HometwoFeaturesComponent } from './components/pages/home-demo-two/hometwo-features/hometwo-features.component';
import { HomeoneKeyFeaturesComponent } from './components/pages/home-demo-one/homeone-key-features/homeone-key-features.component';
import { HometwoKeyFeaturesComponent } from './components/pages/home-demo-two/hometwo-key-features/hometwo-key-features.component';
import { ProgressStyleTwoComponent } from './components/common/progress-style-two/progress-style-two.component';
import { IntroVideoComponent } from './components/common/intro-video/intro-video.component';
import { ScreenshotsStyleTwoComponent } from './components/common/screenshots-style-two/screenshots-style-two.component';
import { HometwoSoftwareIntegrationsComponent } from './components/pages/home-demo-two/hometwo-software-integrations/hometwo-software-integrations.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { FreeTrialStyleTwoComponent } from './components/common/free-trial-style-two/free-trial-style-two.component';
import { PricingStyleTwoComponent } from './components/common/pricing-style-two/pricing-style-two.component';
import { FeedbackStyleTwoComponent } from './components/common/feedback-style-two/feedback-style-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomethreeOverviewComponent } from './components/pages/home-demo-three/homethree-overview/homethree-overview.component';
import { FeaturesStyleTwoComponent } from './components/common/features-style-two/features-style-two.component';
import { HomethreeFeaturesComponent } from './components/pages/home-demo-three/homethree-features/homethree-features.component';
import { HomethreeVideoComponent } from './components/pages/home-demo-three/homethree-video/homethree-video.component';
import { ScreenshotsStyleThreeComponent } from './components/common/screenshots-style-three/screenshots-style-three.component';
import { SoftwareIntegrationsComponent } from './components/common/software-integrations/software-integrations.component';
import { DownloadAppStyleTwoComponent } from './components/common/download-app-style-two/download-app-style-two.component';
import { PricingStyleThreeComponent } from './components/common/pricing-style-three/pricing-style-three.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { HomefourVideoComponent } from './components/pages/home-demo-four/homefour-video/homefour-video.component';
import { HomefourFeaturesComponent } from './components/pages/home-demo-four/homefour-features/homefour-features.component';
import { FeaturesStyleThreeComponent } from './components/common/features-style-three/features-style-three.component';
import { DownloadAppStyleThreeComponent } from './components/common/download-app-style-three/download-app-style-three.component';
import { FeedbackStyleThreeComponent } from './components/common/feedback-style-three/feedback-style-three.component';
import { PricingStyleFourComponent } from './components/common/pricing-style-four/pricing-style-four.component';
import { HomefourSoftwareIntegrationsComponent } from './components/pages/home-demo-four/homefour-software-integrations/homefour-software-integrations.component';
import { ScreenshotsStyleFourComponent } from './components/common/screenshots-style-four/screenshots-style-four.component';
import { ProgressStyleThreeComponent } from './components/common/progress-style-three/progress-style-three.component';
import { FreeTrialStyleThreeComponent } from './components/common/free-trial-style-three/free-trial-style-three.component';
import { FeedbackStyleFourComponent } from './components/common/feedback-style-four/feedback-style-four.component';
import { PricingStyleFiveComponent } from './components/common/pricing-style-five/pricing-style-five.component';
import { HomefiveBannerComponent } from './components/pages/home-demo-five/homefive-banner/homefive-banner.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { ScreenshotsStyleFiveComponent } from './components/common/screenshots-style-five/screenshots-style-five.component';
import { FeaturesStyleFourComponent } from './components/common/features-style-four/features-style-four.component';
import { HomefiveAboutComponent } from './components/pages/home-demo-five/homefive-about/homefive-about.component';
import { HomefiveFeaturesComponent } from './components/pages/home-demo-five/homefive-features/homefive-features.component';
import { FeedbackStyleFiveComponent } from './components/common/feedback-style-five/feedback-style-five.component';
import { ScreenshotsStyleSixComponent } from './components/common/screenshots-style-six/screenshots-style-six.component';
import { FeaturesStyleFiveComponent } from './components/common/features-style-five/features-style-five.component';
import { FunfactsStyleOneComponent } from './components/common/funfacts-style-one/funfacts-style-one.component';
import { FunfactsStyleTwoComponent } from './components/common/funfacts-style-two/funfacts-style-two.component';
import { HomesixBannerComponent } from './components/pages/home-demo-six/homesix-banner/homesix-banner.component';
import { HomesixAboutComponent } from './components/pages/home-demo-six/homesix-about/homesix-about.component';
import { NavbarStyleFourComponent } from './components/common/navbar-style-four/navbar-style-four.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { ContactInfoComponent } from './components/pages/contact-page/contact-info/contact-info.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { SignInPageComponent } from './components/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';
import { ForgetPasswordPageComponent } from './components/pages/forget-password-page/forget-password-page.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogSidebarComponent } from './components/common/blog-sidebar/blog-sidebar.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { RelatedProductsComponent } from './components/pages/products-details-page/related-products/related-products.component';
import { TeamOnePageComponent } from './components/pages/team-one-page/team-one-page.component';
import { TeamTwoPageComponent } from './components/pages/team-two-page/team-two-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { ReviewsPageComponent } from './components/pages/reviews-page/reviews-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AppDownloadPageComponent } from './components/pages/app-download-page/app-download-page.component';
import { ScreenshotsPageComponent } from './components/pages/screenshots-page/screenshots-page.component';
import { FeaturesOnePageComponent } from './components/pages/features-one-page/features-one-page.component';
import { FeaturesTwoPageComponent } from './components/pages/features-two-page/features-two-page.component';
import { AboutSimplePageComponent } from './components/pages/about-simple-page/about-simple-page.component';
import { AboutModernPageComponent } from './components/pages/about-modern-page/about-modern-page.component';
import { TeamStyleOneComponent } from './components/common/team-style-one/team-style-one.component';
import { UserStatsComponent } from './components/common/user-stats/user-stats.component';
import { TeamStyleTwoComponent } from './components/common/team-style-two/team-style-two.component';
import { HomeDemoSevenComponent } from './components/pages/home-demo-seven/home-demo-seven.component';
import { HomeDemoEightComponent } from './components/pages/home-demo-eight/home-demo-eight.component';
import { HomeDemoNineComponent } from './components/pages/home-demo-nine/home-demo-nine.component';
import { HomesevenBannerComponent } from './components/pages/home-demo-seven/homeseven-banner/homeseven-banner.component';
import { HomesevenFeaturesComponent } from './components/pages/home-demo-seven/homeseven-features/homeseven-features.component';
import { HomesevenAboutComponent } from './components/pages/home-demo-seven/homeseven-about/homeseven-about.component';
import { FeaturesStyleSixComponent } from './components/common/features-style-six/features-style-six.component';
import { ProgressStyleFourComponent } from './components/common/progress-style-four/progress-style-four.component';
import { ScreenshotsStyleSevenComponent } from './components/common/screenshots-style-seven/screenshots-style-seven.component';
import { VideoComponent } from './components/common/video/video.component';
import { TrustedFeaturesComponent } from './components/common/trusted-features/trusted-features.component';
import { PricingStyleSixComponent } from './components/common/pricing-style-six/pricing-style-six.component';
import { DownloadAppStyleFourComponent } from './components/common/download-app-style-four/download-app-style-four.component';
import { FooterStyleFourComponent } from './components/common/footer-style-four/footer-style-four.component';
import { ClientReviewsComponent } from './components/common/client-reviews/client-reviews.component';
import { GetStartedComponent } from './components/common/get-started/get-started.component';
import { HomeeightBannerComponent } from './components/pages/home-demo-eight/homeeight-banner/homeeight-banner.component';
import { HomeeightFeaturesComponent } from './components/pages/home-demo-eight/homeeight-features/homeeight-features.component';
import { HomeeightAboutComponent } from './components/pages/home-demo-eight/homeeight-about/homeeight-about.component';
import { FeaturesStyleSevenComponent } from './components/common/features-style-seven/features-style-seven.component';
import { HomeeightScreenshotsComponent } from './components/pages/home-demo-eight/homeeight-screenshots/homeeight-screenshots.component';
import { HomeeightIntroComponent } from './components/pages/home-demo-eight/homeeight-intro/homeeight-intro.component';
import { FunfactsStyleThreeComponent } from './components/common/funfacts-style-three/funfacts-style-three.component';
import { DownloadAppStyleFiveComponent } from './components/common/download-app-style-five/download-app-style-five.component';
import { PricingStyleSevenComponent } from './components/common/pricing-style-seven/pricing-style-seven.component';
import { FooterStyleFiveComponent } from './components/common/footer-style-five/footer-style-five.component';
import { HomeeightBlogComponent } from './components/pages/home-demo-eight/homeeight-blog/homeeight-blog.component';
import { HomenineBannerComponent } from './components/pages/home-demo-nine/homenine-banner/homenine-banner.component';
import { HomenineFeaturesComponent } from './components/pages/home-demo-nine/homenine-features/homenine-features.component';
import { HomenineAppProgressComponent } from './components/pages/home-demo-nine/homenine-app-progress/homenine-app-progress.component';
import { KeyFeaturesComponent } from './components/common/key-features/key-features.component';
import { HomenineBlogComponent } from './components/pages/home-demo-nine/homenine-blog/homenine-blog.component';
import { FreeTrialStyleFourComponent } from './components/common/free-trial-style-four/free-trial-style-four.component';
import { ClientReviewsStyleTwoComponent } from './components/common/client-reviews-style-two/client-reviews-style-two.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    FooterStyleOneComponent,
    FooterStyleTwoComponent,
    FooterStyleThreeComponent,
    FreeTrialStyleOneComponent,
    FeedbackStyleOneComponent,
    PricingStyleOneComponent,
    ScreenshotsStyleOneComponent,
    DownloadAppStyleOneComponent,
    ProgressStyleOneComponent,
    HomeoneFeaturesComponent,
    FeaturesStyleOneComponent,
    HomeoneVideoComponent,
    HomeoneBannerComponent,
    NavbarStyleOneComponent,
    NavbarStyleTwoComponent,
    HometwoBannerComponent,
    HometwoFeaturesComponent,
    HomeoneKeyFeaturesComponent,
    HometwoKeyFeaturesComponent,
    ProgressStyleTwoComponent,
    IntroVideoComponent,
    ScreenshotsStyleTwoComponent,
    HometwoSoftwareIntegrationsComponent,
    PartnerComponent,
    FreeTrialStyleTwoComponent,
    PricingStyleTwoComponent,
    FeedbackStyleTwoComponent,
    HomeDemoThreeComponent,
    HomeDemoFourComponent,
    HomeDemoFiveComponent,
    HomeDemoSixComponent,
    HomethreeBannerComponent,
    HomethreeOverviewComponent,
    FeaturesStyleTwoComponent,
    HomethreeFeaturesComponent,
    HomethreeVideoComponent,
    ScreenshotsStyleThreeComponent,
    SoftwareIntegrationsComponent,
    DownloadAppStyleTwoComponent,
    PricingStyleThreeComponent,
    BlogComponent,
    HomefourBannerComponent,
    HomefourVideoComponent,
    HomefourFeaturesComponent,
    FeaturesStyleThreeComponent,
    DownloadAppStyleThreeComponent,
    FeedbackStyleThreeComponent,
    PricingStyleFourComponent,
    HomefourSoftwareIntegrationsComponent,
    ScreenshotsStyleFourComponent,
    ProgressStyleThreeComponent,
    FreeTrialStyleThreeComponent,
    FeedbackStyleFourComponent,
    PricingStyleFiveComponent,
    HomefiveBannerComponent,
    NavbarStyleThreeComponent,
    ScreenshotsStyleFiveComponent,
    FeaturesStyleFourComponent,
    HomefiveAboutComponent,
    HomefiveFeaturesComponent,
    FeedbackStyleFiveComponent,
    ScreenshotsStyleSixComponent,
    FeaturesStyleFiveComponent,
    FunfactsStyleOneComponent,
    FunfactsStyleTwoComponent,
    HomesixBannerComponent,
    HomesixAboutComponent,
    NavbarStyleFourComponent,
    ContactPageComponent,
    ContactInfoComponent,
    BlogDetailsPageComponent,
    FaqPageComponent,
    SignInPageComponent,
    SignUpPageComponent,
    ForgetPasswordPageComponent,
    HowItWorksPageComponent,
    GalleryPageComponent,
    BlogGridPageComponent,
    BlogRightSidebarPageComponent,
    BlogLeftSidebarPageComponent,
    BlogSidebarComponent,
    ProductsPageComponent,
    ProductsDetailsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    RelatedProductsComponent,
    TeamOnePageComponent,
    TeamTwoPageComponent,
    ServicesPageComponent,
    PricingPageComponent,
    ReviewsPageComponent,
    PrivacyPolicyPageComponent,
    TermsConditionsPageComponent,
    ComingSoonPageComponent,
    NotFoundComponent,
    AppDownloadPageComponent,
    ScreenshotsPageComponent,
    FeaturesOnePageComponent,
    FeaturesTwoPageComponent,
    AboutSimplePageComponent,
    AboutModernPageComponent,
    TeamStyleOneComponent,
    UserStatsComponent,
    TeamStyleTwoComponent,
    HomeDemoSevenComponent,
    HomeDemoEightComponent,
    HomeDemoNineComponent,
    HomesevenBannerComponent,
    HomesevenFeaturesComponent,
    HomesevenAboutComponent,
    FeaturesStyleSixComponent,
    ProgressStyleFourComponent,
    ScreenshotsStyleSevenComponent,
    VideoComponent,
    TrustedFeaturesComponent,
    PricingStyleSixComponent,
    DownloadAppStyleFourComponent,
    FooterStyleFourComponent,
    ClientReviewsComponent,
    GetStartedComponent,
    HomeeightBannerComponent,
    HomeeightFeaturesComponent,
    HomeeightAboutComponent,
    FeaturesStyleSevenComponent,
    HomeeightScreenshotsComponent,
    HomeeightIntroComponent,
    FunfactsStyleThreeComponent,
    DownloadAppStyleFiveComponent,
    PricingStyleSevenComponent,
    FooterStyleFiveComponent,
    HomeeightBlogComponent,
    HomenineBannerComponent,
    HomenineFeaturesComponent,
    HomenineAppProgressComponent,
    KeyFeaturesComponent,
    HomenineBlogComponent,
    FreeTrialStyleFourComponent,
    ClientReviewsStyleTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollTopModule,
    CarouselModule,
    BrowserAnimationsModule,
    TabsModule,
    StickyNavModule,
    NgxSmartModalModule.forRoot(),
    FormsModule,
    CountUpModule,
    AccordionModule,
    HttpClientModule,
    CrystalLightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
