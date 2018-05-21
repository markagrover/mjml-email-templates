import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import log from 'fancy-log'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import MjLayout from './components/MjLayout'
import MjImageText from './components/MjImageText'
import MjBasicComponent from './components/MjBasicComponent'
import MjTestComponent1 from './components/MjTestComponent1'
import MjParagraph from './components/MjParagraph'
import MjLogo from './components/MjLogo'
import MjNav from './components/MjNav'
import MjFooterArea from './components/MjFooterArea'
import MjAddress from './components/MjAddress'
import MjLinerImage from './components/MjLinerImage'
import MjLiners from './components/MjLiners'
import MjWallFoam from './components/MjWallFoam'
import MjBottomPad from './components/MjBottomPad'
import MjPricingTableWallRepairs from './components/MjPricingTableWallRepairs'
import MjIncludedWithProject from './components/MjIncludedWithProject'
registerComponent(MjBasicComponent)
registerComponent(MjImageText)
registerComponent(MjLayout)
registerComponent(MjTestComponent1)
registerComponent(MjParagraph)
registerComponent(MjLogo)
registerComponent(MjNav)
registerComponent(MjFooterArea)
registerComponent(MjAddress)
registerComponent(MjLinerImage)
registerComponent(MjLiners)
registerComponent(MjWallFoam)
registerComponent(MjBottomPad)
registerComponent(MjPricingTableWallRepairs)
registerComponent(MjIncludedWithProject)

// Import and register your components here

const compile = () => {
  gulp.src(path.normalize('components/**.js'))
    .pipe(babel())
    .on('error', log)
    .pipe(gulp.dest('lib'))
    .on('end', () => {
      fs.readFile(path.normalize('./index.mjml'), 'utf8', (err, data) => {
        if (err) throw err
        const result = mjml2html(data)
        fs.writeFileSync(path.normalize('./index.html'), result.html)
      })
    })
}

gulp.task('build', compile)

gulp.task('watch', () => {
  compile()
  return watch([
    path.normalize('components/**.js'),
    path.normalize('index.mjml'),
  ], compile)
})
