import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModernPageComponent } from './components/pages/about-modern-page/about-modern-page.component';
import { AboutSimplePageComponent } from './components/pages/about-simple-page/about-simple-page.component';
import { AppDownloadPageComponent } from './components/pages/app-download-page/app-download-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { FeaturesOnePageComponent } from './components/pages/features-one-page/features-one-page.component';
import { FeaturesTwoPageComponent } from './components/pages/features-two-page/features-two-page.component';
import { ForgetPasswordPageComponent } from './components/pages/forget-password-page/forget-password-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { HomeDemoEightComponent } from './components/pages/home-demo-eight/home-demo-eight.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoNineComponent } from './components/pages/home-demo-nine/home-demo-nine.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoSevenComponent } from './components/pages/home-demo-seven/home-demo-seven.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ReviewsPageComponent } from './components/pages/reviews-page/reviews-page.component';
import { ScreenshotsPageComponent } from './components/pages/screenshots-page/screenshots-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { SignInPageComponent } from './components/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';
import { TeamOnePageComponent } from './components/pages/team-one-page/team-one-page.component';
import { TeamTwoPageComponent } from './components/pages/team-two-page/team-two-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';

const routes: Routes = [
    {path: '', component: SignInPageComponent},
    //{path: 'sobre', component: AboutModernPageComponent},
    {path: 'inicio', component: FeaturesOnePageComponent},
    {path: 'candidatos', component: AboutSimplePageComponent},
    {path: 'resultado', component: TeamTwoPageComponent},
    {path: 'meusvotos', component: TeamOnePageComponent},
    {path: 'relatoriocondomino', component: CartPageComponent},
    {path: 'relatoriodemanda', component: BlogDetailsPageComponent},
    {path: 'relatoriocargo', component: BlogLeftSidebarPageComponent},
    {path: 'relatoriousuario', component: BlogGridPageComponent},
    {path: 'cadastrocargo', component: HomeDemoOneComponent},
    {path: 'cadastrocondomino', component: HomeDemoTwoComponent},


    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'index-4', component: HomeDemoFourComponent},
    {path: 'index-5', component: HomeDemoFiveComponent},
    {path: 'index-6', component: HomeDemoSixComponent},
    {path: 'index-7', component: HomeDemoSevenComponent},
    {path: 'index-8', component: HomeDemoEightComponent},
    {path: 'index-9', component: HomeDemoNineComponent},
    {path: 'features-2', component: FeaturesTwoPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'login', component: SignInPageComponent},
    {path: 'sign-up', component: SignUpPageComponent},
    {path: 'forgot-password', component: ForgetPasswordPageComponent},
    {path: 'how-it-works', component: HowItWorksPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'feedback', component: ReviewsPageComponent},
    {path: 'app-download', component: AppDownloadPageComponent},
    {path: 'screenshots', component: ScreenshotsPageComponent},
    {path: 'team-1', component: TeamOnePageComponent},

    {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},


    {path: 'products', component: ProductsPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'products-details', component: ProductsDetailsPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
